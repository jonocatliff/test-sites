
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
            title="Houston best window replacement company | We'll Take Care Of Everything" 
            desc="Houston best window replacement company: s  "
            canonical={`${props.website}/houston-best-window-replacement-company`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Houston best window replacement company" //KW
            />
            <Header
            title="Houston best window replacement company" //KW
            subtitle="s  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Repair"
            desc="l  "
            image="/contractor.jpg"
            alt="Houston best window replacement company"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Houston best window replacement company" //KW
            desc="l   o n"
            image="/window-washing.jpg"
            alt="Window Repair"
            />
            <Savings
            subtitle="Affordable Window Repair" //KW
            desc="t"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="o"
            cardDesc3="r"
            />
            <Approach
            title="Houston best window replacement company" //KW
            desc="P c t t"
            />
            <Intro
            subtitle="Exceptional Houston best window replacement company" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="u"
            cardDesc2="l l"
            cardDesc3="r"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="i" //KW
            desc2="w"
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
        