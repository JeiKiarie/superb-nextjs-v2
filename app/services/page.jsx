import { Box } from '@chakra-ui/react';
import servicesHeroImg from '../../public/images/pexels-kampus-7551661.jpg';
import memoryCareImg from '../../public/images/pexels-jsme-mila-523821574-18459206.jpg';
import assistedLivingImg from '../../public/images/raychan-yk7F8bdD0eU-unsplash.jpg';
import respiteCareImg from '../../public/images/pexels-olly-3768146.jpg';
import skilledNursingImg from '../../public/images/pexels-rdne-6129159.jpg';
import hospiceCareImg from '../../public/images/ai-generated-8299432_1280.jpg';
import Image from 'next/image';
import { MdAssistWalker } from 'react-icons/md';
import { LiaUserNurseSolid } from 'react-icons/lia';

const Services = () => {
	return (
		<main>
			<section className="services-header">
				<div className="services-info">
					<h1>Various types of care</h1>
					<div className="divider"></div>
					<p>
						At Superb Care Services Ltd, we're not just a place where seniors
						reside; we're a community dedicated to providing a nurturing and
						enriching environment for our residents. With a deep understanding
						of the unique needs and challenges that come with aging, we offer a
						range of comprehensive services aimed at enhancing the quality of
						life for every individual under our care.
					</p>
				</div>
			</section>
			<section className="services-img">
				<article>
					<Image
						className="services-img"
						src={servicesHeroImg}
						alt="Eldery man with carer"
					/>
				</article>
			</section>
			<section className="services-section">
				<div className="services-container">
					<h2>Services available include:</h2>
					<div className="divider"></div>
					<article className="single-service">
						<div className="single-service-header">
							<h3>Assisted Living</h3>
							<Image
								src={assistedLivingImg}
								className="single-service-header-img"
							/>
						</div>
						<p>
							Our assisted living communities are carefully designed to promote
							independence and well-being while offering personalized assistance
							with daily tasks. From helping residents with grooming and
							medication management to providing support with mobility and
							transportation, our compassionate caregivers are here to lend a
							helping hand whenever needed.
						</p>
					</article>
					<article className="single-service">
						<div className="single-service-header">
							<h3>Memory Care</h3>
							<Image
								src={memoryCareImg}
								className="single-service-header-img"
							/>
						</div>
						<p>
							Alzheimer's disease and other forms of dementia can present
							significant challenges for both seniors and their families. Our
							memory care program provides a safe and secure environment where
							residents receive specialized care tailored to their cognitive
							needs. Through innovative therapies, engaging activities, and
							individualized support, we strive to empower residents to live
							fulfilling lives.
						</p>
					</article>
					<artice className="single-service">
						<div className="single-service-header">
							<h3>Respite Care</h3>
							<Image
								src={respiteCareImg}
								className="single-service-header-img"
							/>
						</div>
						<p>
							Caregiving can be demanding, and everyone deserves a break now and
							then. Our respite care services offer temporary relief for
							caregivers while ensuring that their loved ones receive the
							highest standard of care in a welcoming and supportive setting.
							Whether for a few days, weeks, or longer, families can trust that
							their loved ones are in capable and caring hands.
						</p>
					</artice>
					<article className="single-service">
						<div className="single-service-header">
							<h3>Skilled Nursing Care</h3>
							<Image
								src={skilledNursingImg}
								className="single-service-header-img"
							/>
						</div>
						<p>
							Our skilled nursing services are delivered by a multidisciplinary
							team of healthcare professionals dedicated to meeting the complex
							medical needs of our residents. From post-surgery recovery to
							chronic disease management, our nurses and therapists work
							collaboratively to provide comprehensive care that promotes
							healing, comfort, and dignity.
						</p>
					</article>
					<article className="single-service">
						<div className="single-service-header">
							<h3>Hospice Care</h3>
							<Image
								src={hospiceCareImg}
								className="single-service-header-img"
							/>
						</div>
						<p>
							During life's final chapter, our hospice care team provides
							compassionate support and comfort to individuals with terminal
							illnesses and their families. Our holistic approach focuses on
							pain management, symptom control, and emotional support, allowing
							residents to live their remaining days with dignity and peace.
						</p>
					</article>
				</div>
			</section>
		</main>
	);
};

export default Services;
