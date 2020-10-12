import React from 'react';
import {render, act} from '@testing-library/react';
import Post from '../../src/views/Post';
import axios from 'axios';
import {MemoryRouter} from 'react-router-dom';
import {posts} from './__data__/testData';

it('renders out a post', async () => {
    const post = posts[0];
    let container;
    jest
      .spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({ data: post }));
    await act(async () => {
      let renderObj = render(
        <MemoryRouter>
          <Post match={{ params: { postId: 1 } }} />
        </MemoryRouter>,
      );
      container = renderObj.container;
    });
  
    expect(container.textContent).toContain(post.text);
  });