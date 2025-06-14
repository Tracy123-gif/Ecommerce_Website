import React from 'react'
import { Flex, Link, Text, Container, VStack, useColorModeValue, Box } from '@chakra-ui/react';

const Footer = () => {

  const footerData = [
  {
    label: 'Writing',
    href: '#',
    links: [
      { label: 'Digital Garden', href: '#' },
      { label: 'Tutorials', href: '#' }
    ]
  },
  {
    label: 'Art',
    href: '#',
    links: [
      { label: 'Design', href: '#' },
      { label: ' Art', href: '#' },
      { label: 'Photography', href: '#' }
    ]
  },
  {
    label: 'About',
    href: '#',
    links: [
      { label: 'Appearances', href: '#' },
      { label: 'Stores', href: '#' },
      { label: 'Uses', href: '#' }
    ]
  },
  {
    label: 'Social',
    href: '#',
    links: [
      { label: 'Email', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Linkedin', href: '#' }
    ]
  }
];
  return (
    <Box className='bg-[#183B4E]'>
           <Container maxW="9xl" p={{ base: 5, md: 10 }}>
      <VStack spacing={5} alignItems="initial">
        <Flex
          flexWrap="wrap"
          direction={{ base: 'column', md: 'row' }}
          alignItems="start"
          justifyContent="space-between"
        >
          {footerData.map((data, index) => (
            <Flex key={index} direction="column" mb="3">
              <Link
                fontWeight="500"
                href={data.href}
                color={useColorModeValue('white', 'gray.300')}
              >
                {data.label}
              </Link>
              <Flex direction={{ base: 'row', md: 'column' }}>
                {data.links.map((link, index) => (
                  <Link
                    key={index}
                    padding={1}
                    fontSize={{ base: 'sm', sm: 'md' }}
                    href="#"
                    mr={{ base: 1, sm: 2, md: 0 }}
                    color="white"
                    _hover={{ color: 'blue.600' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
            &copy; 2019 company, Inc. All rights reserved.
          </Text>
        </Flex>
      </VStack>
    </Container>

    </Box>
  )
}

export default Footer
