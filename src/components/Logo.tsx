import Image from 'next/image'
const Logo = () => {
  return (
    <div>
      <Image src="/assets/logo.svg" alt="logo" width={160} height={100} />
    </div>
  )
}

export default Logo
