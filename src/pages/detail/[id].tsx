import type { NextPage, GetServerSideProps } from 'next'

import Head from 'next/head'
import NextImage from 'next/image'

import { useState } from 'react'
import { useQuery } from 'react-query'
import {
	Box,
	Heading,
	SimpleGrid,
	Container,
	Flex,
	Image,
	Center,
	Spinner,
	AspectRatio,
} from '@chakra-ui/react'
import axios from 'axios'

import Layout from '@components/layout'
import { generateMarvelImageUrl } from '@helpers/generate-image-url'

type Props = {
	id: string | number
}

const Detail: NextPage<Props> = ({ id }) => {
	const [charDetailDataState, setcharDetailDataState] = useState<
		GetCharsResponse['data']['results'][0] | null
	>(null)

	const { status: charDetailStatus } = useQuery<null, null, GetCharsResponse>(
		['char-detail', id],
		async () => {
			const getCharDetail = await axios.get('/api/get-char-detail', {
				params: {
					id,
				},
			})
			return getCharDetail.data
		},
		{
			onSuccess(marvelData) {
				setcharDetailDataState(marvelData.data.results[0])
			},
		},
	)

	if (charDetailStatus === 'loading') {
		return (
			<Center h="100vh">
				<Spinner size="xl" />
			</Center>
		)
	}

	if (!charDetailDataState) {
		return <Box>There is something wrong</Box>
	}

	return (
		<>
			<Head>
				<title>{charDetailDataState.name} | Marvel</title>
			</Head>
			<Layout>
				<Container maxW="container.xl" minWidth={320}>
					<Heading as="h1" mb={2} display={['block', null, 'none']}>
						{charDetailDataState.name}
					</Heading>
					<Flex flexDirection={['column', null, 'row']}>
						<Box pr={[0, null, 7]} pb={5} pos="relative" w={500}>
							<AspectRatio ratio={1}>
								<Image
									as={NextImage}
									src={generateMarvelImageUrl(charDetailDataState.thumbnail)}
									alt={charDetailDataState.name}
									layout="fill"
									priority
									placeholder="blur"
									blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP0DvVvBwADWgF47/PhiwAAAABJRU5ErkJggg=="
									maxW={500}
								/>
							</AspectRatio>
						</Box>
						<Box>
							<Box as="article">
								<Heading as="h1" mb={2} display={['none', null, 'block']}>
									{charDetailDataState.name}
								</Heading>
								{charDetailDataState.description ? (
									charDetailDataState.description
								) : (
									<Box>No Description </Box>
								)}
							</Box>
						</Box>
					</Flex>
					<Box pt={5}>
						<Heading as="h2">Comics</Heading>
						<SimpleGrid columns={[2, null, 5]} spacing={10}>
							{charDetailDataState.comics.items.map((comic) => {
								return <Box key={comic.name}>{comic.name}</Box>
							})}
						</SimpleGrid>
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log(context)
	return {
		props: {
			id: context.query.id,
		},
	}
}
export default Detail
