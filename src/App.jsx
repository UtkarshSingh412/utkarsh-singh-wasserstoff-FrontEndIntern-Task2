import Button from "./Components/Button";
import Input from "./Components/Input";
import Heading from "./Components/Heading";
import UploadBox from "./Components/UploadBox";
import TicketCard from "./Components/TicketCard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black flex flex-col justify-center items-center p-10">
      <Heading text="Your Journey to Coding Conf 2025 Starts Here!" />
      <UploadBox />
      <div className="space-y-4 w-full max-w-md mt-6">
        <Input placeholder="Full Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="GitHub Username" />
        <Button>Generate My Ticket</Button>

        <TicketCard
          name="Utkarsh Singh"
          email="utkarsh@mail.com"
          username="Utkarsh$23"
          avatarUrl="https://api.dicebear.com/7.x/thumbs/svg?seed=Jonatan"
        />
      </div>
    </div>
  );
}
export default App;
