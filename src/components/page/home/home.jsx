import Container from '../../UI/container'
import Hero from './components/hero'
import HowWork from './components/howWork'
import Recycle from './components/recycle'
import Blog from './components/blogs'
import InfoSection from './components/Info'
import Certificate from './components/Certificate'
import News from './components/news'
import Partners from './components/partners'
import ContactUs from './components/contact-us'


export default async function HomePage({ lang }) {
    return (
        <main>

            <Container>
                <Hero />
                <InfoSection />
                <HowWork />
            </Container>
            <Recycle />
            <Container>
                <Blog />
                <Certificate />
                <News />
                <Partners />
                <ContactUs />
            </Container>
        </main>
    )
}