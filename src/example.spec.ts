/*
 * File: example.spec.ts
 * Project: Nest JS Task Management CRUD API
 * File Created: Monday, 20th April 2020 9:55:44 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Tuesday, 21st April 2020 1:53:35 am
 * -----
 * Copyright 2020 - 2020 WhileGeek, https://umar.tech
 */

describe('my test', () => {
  it('returns true', () => {
    expect(true).toEqual(true);
  });
});

// ? Test sample

class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    global.console.log(`${name} is now a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found!');
    }

    this.friends.splice(idx, 1);
  }
}

// tests
describe('Friends List', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('initializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to list', () => {
    friendsList.addFriend('Umar');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn();

    expect(friendsList.announceFriendship).not.toHaveBeenCalled();

    friendsList.addFriend('Umar');

    expect(friendsList.announceFriendship).toHaveBeenCalledWith('Umar');
  });

  describe('removeFriend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend('Umar');
      expect(friendsList.friends[0]).toEqual('Umar');
      friendsList.removeFriend('Umar');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', () => {
      // expect(() => friendsList.removeFriend('Umar')).toThrowError()
      expect(() => friendsList.removeFriend('Umar')).toThrow(
        new Error('Friend not found!'),
      );
    });
  });
});
