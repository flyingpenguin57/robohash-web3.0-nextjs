'use client'

export default async function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div>
      <div className="my-10">{children}</div>
    </div>
  );
}