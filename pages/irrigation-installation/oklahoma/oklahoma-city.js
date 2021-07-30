
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
            title="Oklahoma City irrigation installation | We'll Take Care Of Everything" 
            desc="Oklahoma City irrigation installation: a i"
            canonical={`${props.website}/oklahoma-city-irrigation-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Oklahoma City irrigation installation" //KW
            />
            <Header
            title="Oklahoma City irrigation installation" //KW
            subtitle="a i"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="l m"
            image="/contractor.jpg"
            alt="Oklahoma City irrigation installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Oklahoma City irrigation installation" //KW
            desc="m w p  "
            image="/window-installations.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc="O"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="o"
            cardDesc2="w"
            cardDesc3="p"
            />
            <Approach
            title="Oklahoma City irrigation installation" //KW
            desc="i e l o"
            />
            <Intro
            subtitle="Exceptional Oklahoma City irrigation installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="m"
            cardDesc2="a  "
            cardDesc3="s"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="u" //KW
            desc2="y"
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
        