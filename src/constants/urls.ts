const baseJsonPlUrl = 'https://jsonplaceholder.typicode.com';
const baseDummyUrl = 'https://dummyjson.com';

export const urls = {
    users: {
        allJsonPlUsers: baseJsonPlUrl + '/users',
        allDummyUsers: baseDummyUrl + '/users',
    },
    posts: {
        allJsonPlPosts: baseJsonPlUrl + '/posts',
        allDummyPosts: baseDummyUrl + '/posts',
    },
    comments: {
        allJsonPlComments: baseJsonPlUrl + '/comments',
        allDummyComments: baseDummyUrl + '/comments',
    }

}
