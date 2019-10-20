const musicTracks = [
  { id: 'musicId', groupId: 'groupId1', name: 'Smells Like Teen Spirit' },
];
const groups = [{ id: 'groupId2', name: 'Foo Fighters' }];

const firstMusicGroup = groups.find(
  group => group.id === musicTracks[0],
);
const groupName = firstMusicGroup.name;
// => [Error] TypeError: undefined is not an object
