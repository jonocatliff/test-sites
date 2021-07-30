
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
            title="Charlotte landscape grading | We'll Take Care Of Everything" 
            desc="Charlotte landscape grading: r v"
            canonical={`${props.website}/charlotte-landscape-grading`}
            />
            <Navigationbar
            phone={props.phone}
            companyName={props.companyName}
            topbar="Charlotte landscape grading" //KW
            />
            <Header
            title="Charlotte landscape grading" //KW
            subtitle="r v"
            />
            <Testimonial
            title="Let's Create Your Dream House"
            subtitle="High-Quality Window Cleaning"
            desc="y  "
            image="/window-installation.jpg"
            alt="Charlotte landscape grading"
            />
            <About 
            subtitle="Fantastic Window Repair" //KW
            title="Professional Charlotte landscape grading" //KW
            desc="s l e y"
            image="/contractor.jpg"
            alt="Window Cleaning"
            />
            <Savings
            subtitle="Affordable Window Cleaning" //KW
            desc="o"
            cardTitle1="Save Time"
            cardTitle2="Save Money"
            cardTitle3="Save Effort"
            cardDesc1="s"
            cardDesc2="y"
            cardDesc3="t"
            />
            <Approach
            title="Charlotte landscape grading" //KW
            desc="n u l e"
            />
            <Intro
            subtitle="Exceptional Charlotte landscape grading" //KW
            title="Why Our service providers Stand Out"
            cardTitle1="Personalized Approach"
            cardTitle2="Fantastic Customer Service"
            cardTitle3="All Types"
            cardDesc1="d"
            cardDesc2="v w"
            cardDesc3=" "
            />
            <CTABottom
            title="Ready To Get Started?"
            desc="c" //KW
            desc2="e"
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
        