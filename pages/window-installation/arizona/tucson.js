
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
            title="Tucson window installation | We'll Take Care Of Everything" 
            desc="Tucson window installation: e g"
            canonical={`${props.website}/tucson-window-installation`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Tucson window installation" //KW
            />
            <Header
            title="Tucson window installation" //KW
            subtitle="e g"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Replacement"
            desc="a e"
            image="/window-washing.jpg"
            alt="Tucson window installation"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Tucson window installation" //KW
            desc="l n s s"
            image="/contractor.jpg"
            alt="Window Replacement"
            />
            <Savings
            subtitle="Affordable Window Replacement" //KW
            desc="r"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="a"
            cardDesc2="o"
            cardDesc3="t"
            />
            <Approach
            title="Tucson window installation" //KW
            desc="A i   i"
            />
            <Intro
            subtitle="Exceptional Tucson window installation" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="e"
            cardDesc2="O o"
            cardDesc3="e"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="a"
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
        