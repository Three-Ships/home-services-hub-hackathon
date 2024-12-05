import { RxAvatar } from 'react-icons/rx';

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-10 bg-black shadow-md">
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-xl font-bold">Cubby</h1>
        <nav>
          <ul className="flex gap-4">
            <RxAvatar className="w-6 h-6" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
