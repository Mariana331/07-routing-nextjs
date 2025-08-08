import css from './Header.module.css';
import Link from 'next/link';
import TagsMenu from '../TagsMenu/TagsMenu';
import { fetchNotes } from '@/lib/api';

const Header = async () => {
  const { notes } = await fetchNotes({});
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu notes={notes} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
