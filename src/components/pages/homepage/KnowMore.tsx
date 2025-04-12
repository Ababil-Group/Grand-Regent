import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const KnowMore = () => {
  return (
    <section className="bg-[#D5D5D7] py-20">
      <div className="container">
        <h2 className="mb-14 text-center text-5xl font-bold text-secondary-gr">
          Need any Assistance?
        </h2>

        <form className="mx-auto max-w-2xl space-y-5" action="">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Input type="text" placeholder="First Name" required />
            <Input type="text" placeholder="Last Name" required />
          </div>
          <Input type="email" placeholder="Email" required />
          <div className="flex items-center justify-center">
            <Button type="submit" className="border-secondary-gr">
              Send
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default KnowMore;
