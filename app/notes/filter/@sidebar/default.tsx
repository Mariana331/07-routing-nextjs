import { fetchNotes } from '@/lib/api';
import css from './SidebarNotes.module.css';
import Link from 'next/link';

const SidebarNotes = async () => {
  const { notes } = await fetchNotes({});
  const tags = [...new Set(notes.flatMap((note) => note.tag))];
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href="/notes/filter/All" className={css.menuLink}>
          All
        </Link>
      </li>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
