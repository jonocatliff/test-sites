
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
            title="Surrey bush trimming | We'll Take Care Of Everything" 
            desc="Surrey bush trimming: c  "
            canonical={`${props.website}/surrey-bush-trimming`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Surrey bush trimming" //KW
            />
            <Header
            title="Surrey bush trimming" //KW
            subtitle="c  "
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Services"
            desc="t n"
            image="/window-installation.jpg"
            alt="Surrey bush trimming"
            />
            <About 
            subtitle="Fantastic Window Installations" //KW
            title="Professional Surrey bush trimming" //KW
            desc="    f a"
            image="/contractor.jpg"
            alt="Window Services"
            />
            <Savings
            subtitle="Affordable Window Services" //KW
            desc=" "
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="t"
            cardDesc2="e"
            cardDesc3="a"
            />
            <Approach
            title="Surrey bush trimming" //KW
            desc="n o e i"
            />
            <Intro
            subtitle="Exceptional Surrey bush trimming" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="k"
            cardDesc2="s  "
            cardDesc3="o"
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="r"
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
        