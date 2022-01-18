import NextLink from 'next/link'
import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type IProps = {
	children: ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
	return (
		<Flex flexDir="column">
			<Flex as="header" bg="white" boxShadow="md">
				<NextLink href="/" passHref>
					<Flex as="a" p={2}>
						Home
					</Flex>
				</NextLink>
			</Flex>
			<Flex>{children}</Flex>
		</Flex>
	)
}

export default Layout
