import {shortenText} from '../../src/utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';

test('shortenText should not alter strings with less than 100 characters', () =>{
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText should cut off extra characters after 100 and add 3 periods', () =>{
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test('word count should return the correct number of words in an array', () =>{
    expect(wordCount(posts)).toBe(233);
});

test('attachUserName should correctly attach a users full name to a post', () =>{
    const newPost = attachUserName(users,posts);
    expect(newPost[0]).toHaveProperty('displayName');
});

test('attachUserName removes posts without a matching user', () =>{
    const newPosts = attachUserName(users,posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
});
