import estilos from './Conteudo.module.css'
import { Button } from "@nextui-org/button";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export function Conteudo() {

    const list = [
        {
          title: "Orange",
          img: "/images/fruit-1.jpeg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "/images/fruit-2.jpeg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "/images/fruit-3.jpeg",
          price: "$10.00",
        },
      ];

    return (
        <main className={estilos.container}>
            <h1>teste</h1>
            <Button color='#E4D4F4'>Press me</Button>
            <Button className="px-unit-2 py-unit-1 min-w-unit-3xl" color='success'>
                My Button
            </Button>

            <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
                {list.map((item, index) => (
                    <Card className='h-[200px]' shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[140px]"
                                src={item.img}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                            <p className="text-default-500">{item.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div>
                <Card isPressable isBlurred>
                <h1>Daniel</h1>
                </Card>
            </div>
        </main>
    )
}