import type { NextPage } from 'next'

import { useRef } from 'react'
import Head from 'next/head'
import NextImage from 'next/image'
import NextLink from 'next/link'
import {
	Container,
	Center,
	AspectRatio,
	SimpleGrid,
	Image,
	Flex,
	Box,
	Spinner,
} from '@chakra-ui/react'

import Layout from '@components/layout'
import { useGetChars } from '@hooks/query/useCharacters'
import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
const Home: NextPage = () => {
	const {
		data: characterDataList,
		status: charsLoadingStatus,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useGetChars({
		getNextPageParam: ({ data: { results, offset } }) => {
			return results.length > 0 ? offset + 30 : false
		},
	})
	const loadMoreRef = useRef(null)

	useIntersectionObserver({
		root: null,
		target: loadMoreRef,
		onIntersect: fetchNextPage,
		enabled: hasNextPage,
		threshold: 1,
	})

	return (
		<>
			<Head>
				<title>Marvel Comics</title>
			</Head>
			<Layout>
				<Container maxW="container.xl">
					{charsLoadingStatus === 'loading' ? (
						<Center w="ful" h="10vh">
							<Spinner size="xl" />
						</Center>
					) : (
						<SimpleGrid columns={[1, 3, 5]} gap={6}>
							{characterDataList?.pages.map((page) =>
								page.data.results.map(({ id, name, thumbnail: { extension, path } }) => (
									<NextLink key={id} passHref href={`/detail/${id}`}>
										<Box
											as="a"
											pos="relative"
											display="block"
											overflow="hidden"
											_hover={{
												img: {
													transform: 'scale(1.1)',
												},
											}}
										>
											<AspectRatio ratio={1}>
												<Image
													as={NextImage}
													src={`${path}.${extension}`}
													alt={name}
													layout="fill"
													priority
													transition="transform .2s ease-in"
													transform="scale(1)"
													placeholder="blur"
													blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0DvVvBwADWgF47/PhiwAAAABJRU5ErkJggg=="
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
												textAlign="center"
											>
												{name}
											</Flex>
										</Box>
									</NextLink>
								)),
							)}
						</SimpleGrid>
					)}
					<div ref={loadMoreRef} />
					{isFetchingNextPage && (
						<Center minH={20}>
							<Spinner />
						</Center>
					)}
				</Container>
			</Layout>
		</>
	)
}

export default Home
