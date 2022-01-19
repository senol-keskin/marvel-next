/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
	interface ProcessEnv extends NodeJS.ProcessEnv {
		MARVEL_PUBLIC_KEY: string
		MARVEL_PRIVATE_KEY: string
	}
}
