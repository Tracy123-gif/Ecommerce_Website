import React, {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom'
import gsap from 'gsap';
import {Box, Text, Image, Button} from '@chakra-ui/react';
import heroImage from '../../assets/image8.jpg'
import heroImage2 from '../../assets/image7.jpg'

const HeaderTextContent = () => {
    const [index, setIndex] = useState(0);
    const content = [
        {
            title: 'NEW COLLECTION',
            mainHead: 'Luxury Without',
            mainHead2: 'Labels',
            subTitle: 'Explore new-in products and future bestsellers',
            imageUrl: heroImage
        }, {
            title: 'NEW BRANDS',
            mainHead: 'Never Ending',
            mainHead2: 'Labels',
            subTitle: 'Get the best',
            imageUrl: heroImage2
        }
    ];

    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(prevIndex => (
                prevIndex === 0
                    ? 1
                    : 0
            ));
        }, 4000);

        // Animate both text and image with gsap
        gsap.fromTo([
            textRef.current, imageRef.current
        ], {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out'
        });

        return() => clearTimeout(timer);
    }, [index]);

    return (
        <Box
            className="relative h-full sm px-2 py-32 mt-72 w-full customWidth max-sm:py-6 headerTextContent flex gap-5 text-left justify-start font-jost">
           
            <Box
                ref={textRef}
                className="text-container flex flex-col gap-5 relative -top-56 w-10/12">
                <Text className="title text-2xl font-medium text-black">
                    {content[index].title}
                </Text>
                <Text className="headTitle text-6xl font-bold text-black">
                    {content[index].mainHead}
                </Text>
                <Text className="headTitle text-5xl font-bold text-black">
                    {content[index].mainHead2}
                </Text>
                <Text
                    className="subTitle text-left text-zinc-800 font-normal text-lg opacity-80">
                    {content[index].subTitle}
                </Text>
                <Button
                    className="shopBtn py-3 px-12 rounded-md font-medium headerButton"
                    backgroundColor={'black'}
                    color={'white'}
                    _hover={{
                        bg: '#C8815F'
                    }}
                    _active={{
                        bg: 'blue.700',
                        transform: 'scale(0.95)'
                    }}
                    transition="background 0.3s, transform 0.2s">
                    <Link to={'/shop'}>Shop Now</Link>
                </Button>
            </Box>
            <Box ref={imageRef} className="image-container " w="50vw" h="500px">
                <Image
                    src={content[index].imageUrl}
                    alt="Collection Image"
                    className='absolute -top-56'
                    objectFit="contain"
                    w="100%"
                    h="100%"
                    transition="opacity 0.5s ease-in-out"/>
            </Box>
        </Box>
    );
};

export default HeaderTextContent;
