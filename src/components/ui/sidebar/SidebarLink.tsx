import Link from "next/link";

export interface SidebarLinksProps {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const SidebarLink = ({ title, path, icon }: SidebarLinksProps) => {
  return (
    <Link
      href={path}
      className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
    >
      {icon}
      <span className="ml-3 text-xl">{title}</span>
    </Link>
  );
};

export default SidebarLink;
