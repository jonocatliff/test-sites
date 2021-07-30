
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
            title="Charlotte backyard landscape design | We'll Take Care Of Everything" 
            desc="Charlotte backyard landscape design:   y"
            canonical={`${props.website}/charlotte-backyard-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte backyard landscape design" //KW
            />
            <Header
            title="Charlotte backyard landscape design" //KW
            subtitle="  y"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="e n"
            image="/window-washing.jpg"
            alt="Charlotte backyard landscape design"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Charlotte backyard landscape design" //KW
            desc="  l e t"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="f"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=" "
            cardDesc2="o"
            cardDesc3="t"
            />
            <Approach
            title="Charlotte backyard landscape design" //KW
            desc="r i t  "
            />
            <Intro
            subtitle="Exceptional Charlotte backyard landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="o"
            cardDesc2="c  "
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="m" //KW
            desc2="o"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Installations!" //KW
            />
        </div>
        )
    }
        