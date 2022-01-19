import NextLink from 'next/link'
import { Container, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type IProps = {
	children: ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
	return (
		<Flex flexDir="column">
			<Flex as="header" pos="sticky" top={0} zIndex={1} bg="white" boxShadow="md">
				<Container as="nav" maxW="container.xl">
					<NextLink href="/" passHref>
						<Flex as="a" p={2}>
							Home
						</Flex>
					</NextLink>
				</Container>
			</Flex>
			<Flex pt={5}>{children}</Flex>
		</Flex>
	)
}

export default Layout
