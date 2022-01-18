import type { NextPage } from 'next'

import NextLink from 'next/link'
import { Container, AspectRatio, Image, Flex, Grid, GridItem } from '@chakra-ui/react'

import Layout from '@components/layout'

const Home: NextPage = () => {
	return (
		<Layout>
			<Container maxW="container.xl">
				<Grid templateColumns="repeat(5, 1fr)" gap={6}>
					{Array.from(Array(30).keys()).map((item) => (
						<NextLink key={item} passHref href="/detail">
							<GridItem as="a" pos="relative" display="block" overflow="hidden">
								<AspectRatio ratio={1}>
									<Image
										src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
										alt="3-D Man"
									/>
								</AspectRatio>
								<Flex
									pos="absolute"
									w="full"
									top="50%"
									transform="translateY(-50%)"
									fontSize="lg"
									px={4}
									justifyContent="center"
									textShadow="0 0 6px rgba(0,0,0,.5) , 0 -3px 4px rgba(0,0,0,.4)"
									color="white"
									fontWeight="bold"
								>
									3-D Man
								</Flex>
							</GridItem>
						</NextLink>
					))}
				</Grid>
			</Container>
		</Layout>
	)
}

export default Home
