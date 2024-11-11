import { ReactNode } from "react";

type TableLayoutPropsTypes = {
  searchInput: ReactNode;
  children: ReactNode;
  pagination: ReactNode;
};

const TableLayout = function ({
  searchInput,
  children,
  pagination,
}: TableLayoutPropsTypes) {
  return (
    <section className="flex flex-col h-screen px-8">
      <header className="flex flex-row items-center justify-end flex-grow-0 h-20 border-b-[1px] border-b-solid border-b-slate-300">
        <div className="h-12 px-4 max-w-64">{searchInput}</div>
      </header>
      <main className="flex-grow border-b-[1px] border-b-solid border-b-slate-300">
        {children}
      </main>
      <div className="flex justify-end flex-grow-0 px-4 py-3">
        <div className="flex-grow inline md:flex-grow-0 min-h-8">{pagination}</div>
      </div>
    </section>
  );
};

export default TableLayout;
