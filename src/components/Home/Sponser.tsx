import * as React from "react";
import addidas from "@/assets/logos/addidas.png";
import nike from "@/assets/logos/Nike.png";
import puma from "@/assets/logos/puma.png";
import asics from "@/assets/logos/asics.png";
import Under from "@/assets/logos/Under.png";
import reebok from "@/assets/logos/reebok.png";
import fila from "@/assets/logos/fila.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Container from "../shared/Container";
import Autoplay from "embla-carousel-autoplay";
const Sponser = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const logoData = [
    {
      id: 1,
      image: (className: string) => (
        <img src={addidas} alt="team member" className={className} />
      ),
    },
    {
      id: 2,
      image: (className: string) => (
        <img src={nike} alt="team member" className={className} />
      ),
    },
    {
      id: 3,
      image: (className: string) => (
        <img src={reebok} alt="team member" className={className} />
      ),
    },
    {
      id: 4,
      image: (className: string) => (
        <img src={Under} alt="team member" className={className} />
      ),
    },
    {
      id: 5,
      image: (className: string) => (
        <img src={puma} alt="team member" className={className} />
      ),
    },
    {
      id: 6,
      image: (className: string) => (
        <img src={asics} alt="team member" className={className} />
      ),
    },
    {
      id: 7,
      image: (className: string) => (
        <img src={fila} alt="team member" className={className} />
      ),
    },
  ];
  return (
    <div>
      <Container>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {logoData.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="basis-1/2 md:basis-1/4 xl:basis-1/5"
              >
                <div className="p-1">
                  <Card className="border-none">
                    <CardContent className="flex aspect-square items-center justify-center p-6 ">
                      <div>{logo.image("w-full")}</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default Sponser;
