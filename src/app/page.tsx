import SearchForm from "./components/search/SearchForm";
import HeaderComponent from "./components/ui/header/Header";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 w-full flex justify-start items-center flex-col">
      <HeaderComponent/>
      <SearchForm/>
 
      
    </div>
  );
}
