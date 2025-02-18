export default function StoryTray({ stories }) {
  const newStories = [...stories, { id: "create", label: "Create Story" }];

  return (
    <ul>
      {newStories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
