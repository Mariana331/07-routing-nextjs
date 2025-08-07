import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesFilter = async ({ params }: Props) => {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  const response = await fetchNotes({ tag });

  return (
    <NotesClient
      notes={response.notes}
      totalPages={response.totalPages}
      initialTag={tag}
    />
  );
};

export default NotesFilter;
