
    import About from '../../../components/About';
    import Approach from '../../../components/Approach';
    import FAQ from '../../../components/FAQ';
    import Header from '../../../components/Header';
    import Intro from '../../../components/Intro';
    import Navigationbar from '../../../components/Navigationbar';
    import Savings from '../../../components/Savings';
    import Services from '../../../components/Services';
    import Testimonial from '../../../components/Testimonial';
    import Link from 'next/link';
    import CTABottom from '../../../components/CTABottom';
    import Footer from '../../../components/Footer';
    import Meta from '../../../partials/seo';
    
    
    export default function Home(props) {
        return (
        <div>
            <Meta 
            title="Toronto backyard landscape design | We'll Take Care Of Everything" 
            desc="Toronto backyard landscape design: i  "
            canonical={`${props.website}/toronto-backyard-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Toronto backyard landscape design" //KW
            />
            <Header
            title="Toronto backyard landscape design" //KW
            subtitle="i  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="b s"
            image="/window-installation.jpg"
            alt="Toronto backyard landscape design"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Toronto backyard landscape design" //KW
            desc="t   l  "
            image="/window-washing.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="v"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2=" "
            cardDesc3="t"
            />
            <Approach
            title="Toronto backyard landscape design" //KW
            desc="r c   w"
            />
            <Intro
            subtitle="Exceptional Toronto backyard landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="t w"
            cardDesc3="a"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="b" //KW
            desc2=" "
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Repair!" //KW
            />
        </div>
        )
    }
        