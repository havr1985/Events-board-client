import { Container } from "../Container";
import { Separator } from "../ui/separator";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavBar } from "./NavBar";
import { Time } from "./Time";

export const Header = () => {
    return (
      <>
        <Container>
          <header className=" flex justify-between items-center">
            <Logo />
            <div className=" hidden md:flex">
              <NavBar />
            </div>
            <div className=" md:hidden">
              <MobileMenu />
            </div>
            <div className=" hidden md:block">
              <Time />
            </div>
          </header>
            </Container>
            <Separator/>
      </>
    );
};
