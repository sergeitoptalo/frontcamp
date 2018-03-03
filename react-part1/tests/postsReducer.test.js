import postsReducer from '../src/client/reducers/posts';

describe('Posts Reducer', () => {
    test("Should return default state", () => {
        const defaultState = { "loading": false, posts: [], currentPost: null };
        const result = postsReducer(undefined, {});
        expect(result).toEqual(defaultState);
    });
});
