
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
            title="Fort Worth backyard landscape design | We'll Take Care Of Everything" 
            desc="Fort Worth backyard landscape design: a  "
            canonical={`${props.website}/fort-worth-backyard-landscape-design`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Fort Worth backyard landscape design" //KW
            />
            <Header
            title="Fort Worth backyard landscape design" //KW
            subtitle="a  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="  i"
            image="/contractor.jpg"
            alt="Fort Worth backyard landscape design"
            />
            <About 
            subtitle="Fantastic Window Replacement" //KW
            title="Professional Fort Worth backyard landscape design" //KW
            desc=". l r  "
            image="/window-installation.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1=","
            cardDesc2="d"
            cardDesc3="l"
            />
            <Approach
            title="Fort Worth backyard landscape design" //KW
            desc="P w n s"
            />
            <Intro
            subtitle="Exceptional Fort Worth backyard landscape design" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="s"
            cardDesc2="e l"
            cardDesc3="c"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="o" //KW
            desc2="d"
            />
            <Footer 
            companyName={props.companyName}
            email={props.email}
            address={props.address}
            phone={props.phone}
            desc="Experienced Window Replacement!" //KW
            />
        </div>
        )
    }
        