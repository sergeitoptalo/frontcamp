import postsReducer from '../../src/client/reducers/posts';
import { loadPosts, updatePosts } from '../../src/client/actions/posts';

describe('Posts Reducer', () => {
    test("Should return default state", () => {
        const defaultState = { "loading": false, posts: [], currentPost: null, currentAuthor: null };
        const result = postsReducer(undefined, {});
        expect(result).toEqual(defaultState);
    });
});

describe('Posts reducer', () => {
    it('Should set loading to true when loading started', () => {
        const state = Object.freeze({});
        expect(postsReducer(state, loadPosts()).loading).toBe(true);
    });

    it('Should save posts and set loading to false when posts were loaded', () => {
        const state = Object.freeze({ loading: true });
        const posts = [
            {
                _id: '5a8acede58424f1688c08935',
                postText: 'Post text 1',
                date: '2018-02-19 16:19:26.253',
                author: '5a8acd6c811cbd3b006c0e31'
            }
        ];
        const newState = postsReducer(state, updatePosts(posts));

        expect(newState.loading).toBe(false);
        expect(newState.posts).toBe(posts);
    })
})


