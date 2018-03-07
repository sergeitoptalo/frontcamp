import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../src/client/actions/posts';
import { appConfig } from '../../src/config/appConfig';

const mockStore = configureMockStore([thunk]);

describe('actions-creators', () => {
    it('should switch app into Loading state while loading posts', () => {
        const loadingAction = actions.loadPosts();

        expect(loadingAction.type).toBe('LOAD_POSTS');
    })
});

describe('async actions', () => {
    let store;

    beforeEach(() => store = mockStore());
    afterEach(fetchMock.restore);

    it('should create action to fetch posts', () => {
        const posts = [
            {
                _id: '5a8acede58424f1688c08935',
                postText: 'Post text 1',
                date: '2018-02-19 16:19:26.253',
                author: '5a8acd6c811cbd3b006c0e31'
            }
        ];

        fetchMock.get(`${appConfig.host}/api/posts`, posts);

        return store.dispatch(actions.getPosts())
        .then(() => {
            expect(fetchMock.called(`${appConfig.host}/api/posts`)).toBe(true);
            expect(store.getActions()).toEqual([
                actions.loadPosts(),
                actions.updatePosts(posts)
            ])
        })
    })
})
