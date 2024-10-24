import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#272727] p-4 text-center text-sm md:text-base">
      &copy; 2024 All rights Reserved. Designed & developed by{" "}
      <Link
        href="https://linkedin.com/in/oskar-dybas"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:underline"
      >
        Oskar Dybas
      </Link>
    </footer>
  );
}
