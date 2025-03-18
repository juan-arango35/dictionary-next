"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchFormProps {
  initialSearch?: string;
}
const SearchForm = ({ initialSearch = "" }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const term = searchTerm.toLowerCase().trim();

    if (term) {
      router.push(`?word=${encodeURIComponent(term)}`);
    } else {
      router.push("/");
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full flex justify-center items-center my-3 relative">
      <div className="w-[22rem] sm:w-[32rem] lg:w-[42rem] relative flex justify-center mt-4">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="search"
            className="bg-gray-300 w-[25rem] sm:w-[32rem] lg:w-[42rem] h-12 pl-5 rounded-2xl"
          />

          <FaMagnifyingGlass className="absolute right-5 top-3.5" />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
