import SidebarNotes from '@/app/notes/filter/@sidebar/SidebarNotes';
import { fetchNotes } from '@/lib/api';

const NotesSidebar = async () => {
  const { notes } = await fetchNotes({});

  return (
    <div>
      <SidebarNotes notes={notes} />
    </div>
  );
};

export default NotesSidebar;
