import Navigation from "@/components/Navigation";
import { createClient } from "../../../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export async function generateMetadata() {
  return {
    title: "Terms and Conditions | Freeda",
    description: "Terms and Conditions for using Freeda's services and platform.",
  };
}

// Definition item component
function Definition({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 py-4 border-b border-black/10 last:border-b-0">
      <dt className="font-inter font-semibold text-black text-[15px] md:text-[16px]">{term}</dt>
      <dd className="font-inter text-black/70 text-[15px] md:text-[16px] leading-[1.7]">{definition}</dd>
    </div>
  );
}

// Section component
function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 md:mb-12">
      <h2 className="font-trap text-xl md:text-2xl font-semibold text-black mb-4 flex items-baseline gap-3">
        <span className="text-[#F02C2C]">{number}</span>
        <span>{title}</span>
      </h2>
      <div className="font-inter text-[15px] md:text-[16px] text-black/70 leading-[1.8] space-y-4">
        {children}
      </div>
    </section>
  );
}

// Subsection component
function Subsection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 mb-4">
      <h3 className="font-trap text-lg md:text-xl font-semibold text-black mb-3 flex items-baseline gap-2">
        <span className="text-[#F02C2C] text-base">{number}</span>
        <span>{title}</span>
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

export default async function LegalPage() {
  const client = createClient();
  let footerSlices = null;

  try {
    const homepage = await client.getSingle("homepage");
    footerSlices = homepage.data.slices?.filter((slice: any) => slice.slice_type === "footer");
  } catch {
    // No footer
  }

  return (
    <main className="relative bg-white min-h-screen">
      <Navigation theme="light" />

      {/* Hero Section */}
      <section className="w-full bg-[#EDEDED] pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <h1 className="font-trap text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-1px] text-black mb-4">
            Terms and Conditions
          </h1>
          <p className="font-inter text-base text-black/50">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <article className="w-full max-w-[900px] mx-auto px-5 md:px-10 py-12 md:py-16">

        {/* Freeda Logo */}
        <div className="mb-10 flex justify-center">
          <img
            src="/images/Picture1.png"
            alt="Freeda"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Section 1 - Definitions */}
        <Section number="1" title="Definitions">
          <dl className="divide-y divide-black/10">
            <Definition
              term="Account"
              definition="means the Customer's dedicated area on the Platform, accessible by login and password, enabling use of the Services."
            />
            <Definition
              term="Content"
              definition="means all items, data and documents provided by the Customer to FREEDA for performance of the Services."
            />
            <Definition
              term="Contract"
              definition="means the contractual framework formed by the Quotation and these Terms and Conditions."
            />
            <Definition
              term="Customer"
              definition="means the legal entity, acting in the course of its trade, business or profession, identified in the Quotation and entering into the Contract with FREEDA."
            />
            <Definition
              term="Deliverables"
              definition="means any tangible or intangible output — such as reports, analyses, documentation, data exports, technical notes or other project-specific materials produced and delivered by the Company to the Customer in the course of performing Services. Such Deliverables are prepared based in whole or in part on the Customer's Content."
            />
            <Definition
              term="FREEDA and/or the Company"
              definition="means FREEDA a French société par actions simplifiée (SAS) registered with the Nanterre Trade and Companies Register (RCS) under No. 932 615 883, VAT No. FR31932615883, having its registered office at 7 Avenue Madeleine, 92700 Colombes, France."
            />
            <Definition
              term="Parties"
              definition="means, individually, FREEDA or the Customer, and collectively, both."
            />
            <Definition
              term="Platform"
              definition="means the online, cloud-based SaaS software infrastructure developed and made available by FREEDA, enabling the Customer to benefit from the Services."
            />
            <Definition
              term="Quotation"
              definition="means the commercial document issued by FREEDA describing the Services subscribed by the Customer, their financial terms and their duration."
            />
            <Definition
              term="Services"
              definition="means the services provided by FREEDA by means of access to the Platform."
            />
            <Definition
              term="Subscription"
              definition="means the purchase of the Services for a specified period, as set out in the Quotation."
            />
            <Definition
              term="Term(s)"
              definition="means the initial Subscription term and any successive periods of automatic renewal."
            />
            <Definition
              term="Terms and Conditions"
              definition="means this document governing the contractual relationship between the Parties."
            />
            <Definition
              term="Users"
              definition="means the Customer's employees authorized by the Customer to access the Account and use the Platform on its behalf."
            />
          </dl>
        </Section>

        {/* Section 2 - Company Information */}
        <Section number="2" title="Company Information">
          <p>The Company may be contacted:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>via the contact details indicated on the "Contact" page of the Platform</li>
            <li>at the contact details specified in the Quotation</li>
            <li>by post at the registered office</li>
          </ul>
        </Section>

        {/* Section 3 - Contractual Documents */}
        <Section number="3" title="Contractual Documents">
          <p>The contractual relationship between the Customer and the Company is governed, in descending hierarchical order, by the following documents:</p>

          <div className="mt-6 space-y-6">
            <div className="bg-[#F8F8F8] rounded-lg p-5">
              <h4 className="font-semibold text-black mb-2">The Quotation</h4>
              <p className="mb-3">It's based on the Customer's requests.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Customer must accept it in writing (including by email) within 15 days of its issue. This acceptance implies acceptance of the Terms and Conditions in their version in force at the date of the Quotation.</li>
                <li>In case of contradiction, the Quotation shall prevail over the Terms and Conditions.</li>
                <li>In case of contradiction, the most recent Quotation shall prevail over the oldest one(s).</li>
              </ul>
            </div>

            <div className="bg-[#F8F8F8] rounded-lg p-5">
              <h4 className="font-semibold text-black mb-2">The Terms and Conditions</h4>
              <p>They define:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The terms of use of the Services</li>
                <li>The respective obligations of the parties</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Section 4 - Customer Requirements */}
        <Section number="4" title="Customer Requirements">
          <p>The Customer is (i) a legal entity acting through a natural person with the power or authority required to enter into a contract in the Customer's name and on their behalf. (ii) acting as a professional, understood as any natural person or legal entity acting for purposes within the scope of their commercial, industrial, artisanal, liberal or activity, including when acting in the name of or on behalf of another professional.</p>
        </Section>

        {/* Section 5 - Access to Services */}
        <Section number="5" title="Access to the Services">
          <p>To access the Services, the Customer shall contact the Company using the details set out in Article Company Information or submit a signed Quotation. The Company will review the request against the eligibility criteria set out in Article Customer Requirements and may request supporting documentation (e.g., company identification, VAT details, professional-use confirmation, sanctions/export-control screening, technical prerequisites). The Company may accept or refuse any request at its discretion, without liability, if the Customer does not meet such conditions.</p>

          <p>Upon acceptance the Company creates the Customer Account and the initial User designated by the Customer.</p>

          <p>The Customer accesses the Services via the Platform (web application at the URL notified by the Company).</p>

          <p>Access is strictly limited to the number of Users, environments and features specified in the Quotation. Credentials are individual and non-transferable; shared accounts are prohibited. Access by Affiliates or subcontractors is permitted only if expressly authorized in the Quotation and subject to the Customer's full responsibility.</p>

          <p>The Customer must keep credentials and API keys confidential, implement appropriate internal controls (including MFA where available), and immediately notify the Company of any loss, theft or suspected compromise. The Company may reset credentials or suspend access where security is at risk or misuse is suspected.</p>

          <p>The Customer is responsible for its equipment, networks, browsers, and configurations required to access the Platform and for any related connectivity costs. The Customer acknowledges that the implementation of the Services requires a connection to the Internet and that the quality of the Services depends on this connection, for which the Company is not responsible.</p>
        </Section>

        {/* Section 6 - Description of Services */}
        <Section number="6" title="Description of the Services">
          <p>FREEDA is a company operating the Platform designed to help its Customers accelerate their coliving and building development projects by preventing potential costly pre-construction mistakes that cause delays and impact profitability.</p>

          <p>To enable FREEDA to perform the Contract and the Services, the Customer shall first upload in the Platform all relevant Content concerning its construction projects including their specifications. On the basis of the Content, the Platform will analyze the Content, in particular regarding its compliance with the specifications and applicable regulations and provide compliance reports and any other Deliverables. FREEDA will use an Artificial Intelligence model for the purposes of the Services and the generation of the Deliverables.</p>

          <p>The Services to which the Customer has subscribed are described in the Quotation.</p>

          <p>The Company reserves the right to offer any other Service.</p>

          <p>Any request to modify the subscribed Services must be the subject of an additional Quotation.</p>
        </Section>

        {/* Section 7 - Maintenance, Hosting, Technical Support */}
        <Section number="7" title="Maintenance, Hosting, Technical Support">
          <Subsection number="7.1" title="Maintenance">
            <p>For the duration of the Services, the Customer benefits from maintenance, in particular corrective and ongoing maintenance. In this context, access to the Platform may be limited or suspended.</p>

            <p>The Company makes every effort to provide the Customer with corrective maintenance to correct any malfunction or bug found on the Platform.</p>

            <p>The Customer also benefits from ongoing maintenance, which the Company may carry out automatically and without prior notice, and which includes improvements to the Platform's functionalities, the addition of new functionalities and/or technical installations used within the framework of the Platform (aiming to introduce minor or major extensions).</p>

            <p>Access to the Platform may also be limited or suspended for planned maintenance, which may include the corrective and ongoing maintenance operations mentioned above. In such cases, the Company undertakes to inform the Customer at least 24 hours before the maintenance operation, by any written means, and to use its best efforts to ensure that these operations do not exceed 8 hours and are carried out outside working hours, i.e. Monday to Friday from 8 a.m. to 6 p.m., Paris time, France.</p>
          </Subsection>

          <Subsection number="7.2" title="Hosting">
            <p>The Company uses its best efforts to host the Platform, as well as the data produced and/or entered by/on the Platform, on its servers or via a professional hosting service provider, and on servers located in a territory of the European Union.</p>
          </Subsection>

          <Subsection number="7.3" title="Technical Support">
            <p>In the event of any difficulty encountered while using our Services, the Customer may contact the Company using contact details provided in article "Company information".</p>

            <p>Technical support service is available from Monday to Friday, excluding public holidays, from 8 am to 6 pm. Depending on the need identified, the Company will estimate the response time and inform the Customer accordingly.</p>
          </Subsection>
        </Section>

        {/* Section 8 - Duration */}
        <Section number="8" title="Duration of the Services">
          <p>The duration of the Services is specified in the Quotation.</p>
        </Section>

        {/* Section 9 - Financial Terms */}
        <Section number="9" title="Financial Terms">
          <Subsection number="9.1" title="Price of Services">
            <p>The price of the Services subscribed by the Customer is indicated in the Quotation.</p>
            <p>The Company is free to offer promotional offers or price reductions.</p>
            <p>The Company's prices may be revised at any time under the conditions of the article "Modification of the Terms and Conditions".</p>
          </Subsection>

          <Subsection number="9.2" title="Invoicing and payment terms">
            <p>The Company's invoicing and payment terms are specified in the Quotation.</p>
            <p>The Customer warrants that they have all necessary authorizations to use this method of payment.</p>
          </Subsection>

          <Subsection number="9.3" title="Consequences of late or non-payment">
            <p>In the event of default or delay in payment, the Company reserves the right, from the day after the due date shown on the invoice, to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Immediately suspend the Services in progress until full payment of the amounts due.</li>
              <li>Charge interest on arrears equal to 3 times the legal interest rate, based on the amount of sums not paid by the due date, and a flat-rate indemnity of 40 euros for collection costs, without prejudice to additional compensation if the collection costs actually incurred exceed this amount.</li>
            </ul>
          </Subsection>
        </Section>

        {/* Section 10 - Intellectual Property */}
        <Section number="10" title="Intellectual Property Rights">
          <Subsection number="10.1" title="Intellectual property rights on the Platform">
            <p>The Platform is the Company's property, as are Company's software, infrastructures, databases and content of any kind (texts, images, visuals, music, logos, brands, etc.). They are protected by all intellectual property rights or database producers' rights in force. The license granted to the Customer does not entail any transfer of ownership.</p>
            <p>The Customer is granted a non-exclusive, personal and non-transferable license to use the Platform in SaaS mode for the duration specified in the article "Duration of the Services".</p>
            <p>The Customer as well as the Users are granted a non-exclusive, personal and non-transferable license to use the Platform in SaaS mode for the duration specified in the article "Duration of the Services".</p>
          </Subsection>

          <Subsection number="10.2" title="Intellectual property rights on the Content">
            <p>The Customer retains all intellectual property rights in any elements owned by the Customer that pre-date the Contract, including all data, documents and Content necessary for performance of the Services.</p>
            <p>The Customer grants FREEDA a non-exclusive license to use the Customer's Content in connection with the performance of the Services.</p>
            <p>This license is granted for the duration of the Services, worldwide, for operational purposes, and without limitation or reservation.</p>
            <p>The Customer represents and warrants that it holds all necessary rights, titles, licenses and authorizations to upload and use the Content within the Platform. The Customer shall indemnify the Company against any third-party claim arising from the use or processing of such Content.</p>
          </Subsection>

          <Subsection number="10.3" title="Intellectual property rights on the Deliverables">
            <p>Upon full payment by the Customer, FREEDA assigns to the Customer all intellectual property rights held in the final form of the Deliverables. This assignment does not extend to, and FREEDA retains all rights, title, and interest in and to, any pre-existing materials, tools, software, algorithms, and methodologies used by FREEDA to create the Deliverables. FREEDA grants the Customer a non-exclusive, perpetual, worldwide, royalty-free license to use any its pre-existing IP solely to the extent it is embedded in, and necessary for the use of, the Deliverables.</p>

            <p>The rights thus transferred include:</p>
            <ol className="list-[lower-alpha] pl-6 space-y-3 mt-3">
              <li>the right to reproduce and the right to fix the Deliverables, in whole or in part, in any format, on any medium, in particular material, analog or digital, on any product or packaging, of any nature whatsoever and by any process, whether these media and processes are existing or future, foreseeable or unforeseeable.</li>
              <li>the right to manufacture, use and distribute, free of charge or for a fee, the Deliverables, in as many copies as the Customer pleases, in whole or in part, and through any distribution channels.</li>
              <li>the right to represent and publicly exhibit the Deliverables, in whole or in part, free of charge or for a fee, in any physical or intangible place, through any means of distribution, of any nature whatsoever, existing or future, foreseeable or unforeseeable.</li>
              <li>the right to use the reproductions and/or representations of the Deliverables carried out in the manner described above, for promotional purposes, or for communication purposes, whether commercial or not, or in an advertising context.</li>
              <li>the right to adapt, modify, arrange and correct the Deliverables, in particular, without this list being exhaustive, through the retouching, cropping, change of format or colours of the Deliverables or the affixing of its name, brand and logo to them, in particular to take into account technical constraints, or for any other reason.</li>
              <li>the right to use the Deliverables, in whole or in part and in any manner whatsoever (by association, incorporation, adaptation), in order to make any other creation.</li>
              <li>the right to reproduce, represent, distribute, adapt and use the adaptations of the Secondary Deliverables in the manner set out in points a) to f).</li>
            </ol>

            <p className="mt-4">The rights described above may be exploited directly by the Customer, assigned or granted by it to third parties, in whole or in part, according to the terms and conditions it deems most appropriate.</p>
          </Subsection>
        </Section>

        {/* Section 11 - Commercial References */}
        <Section number="11" title="Commercial References">
          <p>The parties may use their respective names, brands and logos, and refer to their respective platforms, as commercial references, for the duration of their contractual relationship and 3 years thereafter.</p>
        </Section>

        {/* Section 12 - Customer's Obligations */}
        <Section number="12" title="Customer's Obligations and Liability">
          <Subsection number="12.1" title="Concerning the provision of information">
            <p>The Customer undertakes to provide the Company with all the information required to subscribe to and use the Services.</p>
          </Subsection>

          <Subsection number="12.2" title="Concerning the Customer's Account">
            <p>The Customer:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>guarantees that the information provided in the form is accurate and undertakes to keep it up to date,</li>
              <li>acknowledges that this information is proof of their identity and is binding as soon as it is validated,</li>
              <li>is responsible for maintaining the confidentiality and security of their login and password. Any access to the Platform using their login and password is deemed to have been made by the Customer.</li>
            </ul>
            <p className="mt-3">The Customer must immediately contact the Company using the contact details provided in article "Company information" if they find that their Account has been used without their knowledge. The Customer acknowledges that the Company shall have the right to take all appropriate measures in such a case.</p>
            <p>The Customer is solely responsible for setting User access rights.</p>
          </Subsection>

          <Subsection number="12.3" title="Concerning the Content">
            <p>The Customer shall provide FREEDA with all documents, data and other resources necessary for the proper performance of the Services, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>the Customer's Content (plans, specifications, project data, etc.),</li>
              <li>any additional documents or commercial information reasonably requested by the Company.</li>
            </ul>
            <p className="mt-3">The Customer understands and agrees that the quality, relevance and reliability of the Services depend directly on the accuracy, completeness and legibility of the Content and information provided. The Company shall not be liable for the results of analyses or Deliverables if the Content:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>is incomplete, inaccurate or outdated,</li>
              <li>contains material errors or formatting issues, or</li>
              <li>is not properly interpretable (e.g., due to poor OCR results, low-resolution documents, or illegible markings).</li>
            </ul>
          </Subsection>

          <Subsection number="12.4" title="Concerning the use of the Services">
            <p>The Customer is responsible for their use of the Services and any information they share in this context. The Customer undertakes to ensure that the Services are used exclusively by them and/or Users, who are subject to the same obligations as the Customer in their use of the Services.</p>

            <p>The Customer undertakes not to use the Services for purposes other than those for which they were designed, and in particular to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>engage in any illegal or fraudulent activity,</li>
              <li>undermine public order and morality,</li>
              <li>infringe the rights of third parties in any way whatsoever,</li>
              <li>violate any contractual, legislative or regulatory provision,</li>
              <li>engage in any activity likely to interfere with a third party's computer system, in particular for the purpose of violating its integrity or security,</li>
              <li>promote their services and/or websites or those of a third party,</li>
              <li>assist or incite a third party to commit one or more of the acts or activities listed above.</li>
            </ul>

            <p className="mt-3">The Customer also refrains from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>copying, modifying or misappropriating any element belonging to the Company or any concepts it exploits within the framework of the Services,</li>
              <li>engaging in any behavior likely to interfere with or hijack the Company's computer systems or undermine its computer security measures,</li>
              <li>infringing Company's financial, commercial or moral rights and interests,</li>
              <li>marketing, transferring or otherwise giving access in any way whatsoever to the Services, to information hosted on the Platform or to any element belonging to the Company.</li>
            </ul>

            <p className="mt-3">The Customer shall indemnify the Company against any claim and/or action that may be brought against it as a result of the breach of any of the Customer's obligations. The Customer shall indemnify the Company for any loss suffered and reimburse the Company for any sums it may have to bear as a result.</p>
          </Subsection>
        </Section>

        {/* Section 13 - Company's Obligations */}
        <Section number="13" title="Company's Obligations and Liability">
          <p>The Company undertakes to provide the Services with diligence, it being specified that it is bound by a best-effort obligation.</p>
          <p>The Company shall use its best efforts to comply with the timetable for completion of the Services indicated in the Quotation. As these deadlines are provided for guidance only, the Company shall not be held liable in the event of non-compliance.</p>
          <p>Any delay attributable to the Customer postpones the agreed delivery date by the same duration.</p>

          <Subsection number="13.1" title="Concerning the quality of the Services">
            <p>The Company carries out regular checks on the operation and accessibility of its Services and may carry out maintenance under the conditions specified in article "Maintenance".</p>
            <p>However, the Company shall not be held liable for temporary difficulties or impossibilities in accessing its Services resulting from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>circumstances external to its network (including but not limited to partial or total failure of the Customer's servers),</li>
              <li>failure of equipment, cabling, services or networks not included in its Services or not under its responsibility,</li>
              <li>interruption of Services by telecom operators or Internet service providers,</li>
              <li>intervention by the Customer, including but not limited to incorrect configuration of the Services,</li>
              <li>force majeure.</li>
            </ul>
            <p className="mt-3">The Company is responsible for the operation of its servers, the outer limits of which are constituted by the connection points.</p>
            <p>Furthermore, the Company does not guarantee that the Services as they are subject to constant research to improve their performance and progress, will be totally free of errors, defects or faults.</p>
          </Subsection>

          <Subsection number="13.2" title="Concerning the Platform service level guarantee">
            <p>The Company makes every effort to maintain 24/7 access to the Platform, except in the event of scheduled maintenance under the conditions defined in article "Maintenance" or in the event of force majeure.</p>
          </Subsection>

          <Subsection number="13.3" title="Concerning the backup of data on the Platform">
            <p>The Company shall use its best efforts to safeguard all data produced and/or entered by/on the Platform.</p>
            <p>However, except in the case of proven negligence on the part of the Company, it is not liable for any loss of data during maintenance operations.</p>
          </Subsection>

          <Subsection number="13.4" title="Concerning data storage and security">
            <p>The Company provides sufficient storage capacity for the operation of the Services.</p>
            <p>The Company makes its best efforts to ensure data security by implementing measures to protect infrastructures and the Platform, to detect and prevent malicious acts and to recover data.</p>
          </Subsection>

          <Subsection number="13.5" title="Concerning subcontracting and assignments">
            <p>The Company may use subcontractors to carry out the Services, and these subcontractors are subject to the same obligations as the Company. Nevertheless, the Company remains solely responsible to the Customer for the proper performance of the Services.</p>
            <p>The Company may substitute any person who will be subrogated in all its rights and obligations under its contractual relationship with the Customer. In such a case, the Company will inform the Customer of this substitution by any written means.</p>
          </Subsection>
        </Section>

        {/* Section 14 - Limitation of Liability */}
        <Section number="14" title="Limitation of the Company's Liability">
          <p>The Customer acknowledges and agrees that the Platform and Services are provided solely as a professional decision-support tool. The Deliverables and any other output are generated based on the Content provided by the Customer and are for informational purposes only. The Company does not provide legal, regulatory, architectural, or engineering advice, and the use of the Services is not a substitute for the Customer's independent professional judgment. The Company makes no representation or warranty regarding the accuracy, completeness, or suitability of any Deliverables, information generated by the Services or their compliance with applicable laws, or technical standards.</p>

          <p>The Customer retains sole and exclusive responsibility for: (a) the accuracy, completeness, legality, and proper formatting of all Content provided to the Company; (b) the interpretation and use of the Deliverables, including the verification of any potential issues identified by the Services; and (c) the ultimate validation and compliance of all project plans and decisions with applicable legal and regulatory requirements.</p>

          <p>The Company shall have no liability for any loss, error, or damage resulting from the Customer's failure to fulfill these responsibilities.</p>

          <p>To the maximum extent permitted by law, the Company's liability in connection with the Contract shall be limited as follows: (a) the Company shall not be liable for any indirect, consequential, or special damages, including but not limited to loss of profits, loss of business, or loss of data; (b) the Company's total and cumulative liability for any proven direct damages arising from or related to the Services shall not exceed the total fees paid by the Customer to the Company under the applicable Quotation during the twelve (12) months preceding the event giving rise to the claim; (c) the limitations set forth herein shall not apply to damages resulting from death, bodily injury, or the Company's gross negligence (faute lourde). Any claim for damages must be notified to the Company by registered letter with acknowledgement of receipt within one (1) month of the occurrence of the damaging event.</p>
        </Section>

        {/* Section 15 - Reuse of Data */}
        <Section number="15" title="Reuse of Data">
          <p>The Company shall not use any Content — including data, plans, files, annotations, project-specific information, or outputs — for the purposes of training, fine-tuning, validating, or otherwise improving any machine learning models, artificial intelligence systems, or features of the Platform, except as strictly necessary to perform the Services under the Contract.</p>

          <p>The Company shall not incorporate any Customer Content into its internal training sets, test corpora, benchmarking datasets, or product development environments, whether directly or after transformation, abstraction, or aggregation.</p>

          <p>This clause does not prevent the Company from using:</p>
          <ol className="list-[lower-alpha] pl-6 space-y-2">
            <li>telemetry and metadata related to the general use of the Platform (e.g., feature adoption, session duration, performance data), provided it contains no Customer Content.</li>
            <li>technical logs and security data (e.g., system events, error logs) processed solely for support, security, or operational continuity purposes.</li>
            <li>aggregated, non-identifiable statistical reports created solely for the Customer (e.g., project dashboards), which are not reused across customers.</li>
          </ol>
        </Section>

        {/* Section 16 - Personal Data */}
        <Section number="16" title="Personal Data Processing">
          <Subsection number="16.1" title="General provisions">
            <p>The parties undertake, each insofar as it is concerned, to comply with all legal and regulatory obligations incumbent on them in terms of personal data protection, in particular Law 78-17 of January 6, 1978 in its latest amended version known as the Loi Informatique et Libertés and Regulation EU 2016/679 of the European Parliament and of the Council of April 27, 2016 (together the "Applicable Regulations").</p>
            <p>To find out more about the processing carried out by the Company, the Customer is invited to consult the Company's privacy policy, which is available on the Platform.</p>
          </Subsection>

          <Subsection number="16.2" title="Processing of personal data by the Company as a processor">
            <p className="font-semibold text-black">Purpose</p>
            <p>The purpose of this clause is to define the conditions under which the Company undertakes to carry out, on Customer's behalf, the personal data processing operations defined below.</p>

            <p className="font-semibold text-black mt-4">Description of the processing carried out by the Company</p>
            <p>As part of the Services, the Company processes personal data in the name and on behalf of the Customer as a data processor, while the Customer acts as a data controller within the meaning of the Applicable Regulation. The characteristics of the processing are described in Appendix 1 of this Agreement.</p>

            <p className="font-semibold text-black mt-4">Company's obligations with respect to the Customer</p>

            <p className="font-medium text-black/80 mt-3">Data processing:</p>
            <p>The Company undertakes to process the personal data only for the purposes listed in Appendix 1 and in accordance with the Customer's documented instructions, including with regard to transfers of data outside the European Union. Where the Company considers that an instruction infringes the Applicable Regulation, it shall immediately inform the Customer thereof. The Company reserves the right to suspend processing until the Customer modifies the instruction in question so that it no longer violates the Applicable Regulation, without incurring any contractual liability as a result of such suspension. This suspension shall not give rise to any refund of the price of the Services for the period of suspension. If the Customer does not modify but maintains the instruction in question, the Company reserves the right to terminate the Agreement immediately and without charge. Moreover, if the Company shall process personal data and transfer them to a third country or an international organization, according to the applicable legislation of this Agreement, he shall inform the Customer of that legal requirement before processing, unless that law prohibits such information on important grounds of public interest.</p>

            <p className="font-medium text-black/80 mt-3">Security and data confidentiality:</p>
            <p>The Company undertakes to implement the appropriate technical and organizational measures to ensure the security and integrity of personal data, their backup and the restoration of their availability in the event of a physical or technical incident. The Company ensures that the persons authorized to process the personal data hereunder have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.</p>

            <p className="font-medium text-black/80 mt-3">Sub-processors:</p>
            <p>The Company is authorized to recruit the entities (hereinafter "the Sub-Processor") listed in Appendix 1 to carry out processing activities. The Company shall inform the Customer, in writing beforehand, of any intended changes concerning the addition or replacement of Sub-Processors as listed. This information must clearly indicate which processing activities are concerned, the name and contact details of the Sub-Processor. The Customer has a period of fifteen (15) calendar days from the date of receipt of this information to submit its legitimate and justifiable objections. In the absence of notification of objections after this period, the Customer shall be deemed to have authorized the use of the relevant Sub-Processor. In the event of Customer's continuing objections, the Parties shall meet in good faith and use their best efforts to discuss a resolution. The Company may choose to (i) not hire the Sub-Processor or (ii) take the corrective action requested by the Customer in connection with the objections before hiring the Sub-Processor. If neither option is reasonably possible, and if the Company cannot for legitimate reasons hire another processor for the intended processing, either Party may terminate this Agreement upon a thirty (30) days' notice.</p>

            <p className="font-medium text-black/80 mt-3">Transfer of personal data outside the European Union:</p>
            <p>The Company is authorized to transfer personal data processed as part of this Agreement to countries located outside the European Union, if appropriate safeguards have been implemented as defined under Chapter V of GDPR.</p>

            <p className="font-medium text-black/80 mt-3">Assistance and provision of information:</p>
            <p>The Company undertakes to assist the Customer and to respond without undue delay to any request for information sent by the Customer, whether in the context of a request for the exercise of their rights by data subjects, a privacy impact assessment, or a request made by a supervisory authority or the Customer's data protection officer.</p>

            <p className="font-medium text-black/80 mt-3">Exercise of data subject's Rights:</p>
            <p>Insofar as this is possible, the Company shall assist the Customer in fulfilling its obligation to respond to requests made to the Company by data subjects to exercise their rights under the Applicable Regulation. Where requests are made directly to the Company, the Company shall (i) promptly send such requests to the Customer by e-mail to the address provided by the Customer, and (ii) acknowledge receipt of requests, informing the data subjects that their requests have been transferred to the Customer, as the data controller.</p>

            <p className="font-medium text-black/80 mt-3">Notification of personal data breach:</p>
            <p>The Company shall notify the Customer of any personal data breach relating to the processing operations covered by this Agreement, without undue delay after becoming aware of it and to provide the Customer with all relevant information and documentation relating to such personal data breach.</p>

            <p className="font-medium text-black/80 mt-3">Fate of the data:</p>
            <p>The Company undertakes, at the Customer's election, to delete the personal data at the end of the Agreement or to return it to the Customer and not to keep a copy of it, unless required by the Applicable Regulation. The Customer has one (1) month from the end of the Agreement to exercise this choice. After this period, the Company shall delete all personal data.</p>

            <p className="font-medium text-black/80 mt-3">Subsequent use of personal data by the Company:</p>
            <p>The Customer hereby authorizes the Company to process the personal data collected within the framework of the services (in particular the session and navigation data) for the purpose of improving the Company's services, and in particular for the realization of statistics on the way the Company's solution is used by the users. The Company will act as a data controller within the meaning of the Applicable Regulation and will respect the legal provisions of the aforesaid regulation.</p>

            <p className="font-medium text-black/80 mt-3">Documentation:</p>
            <p>The Company shall make available to the Customer, at the Customer's request, all information and documents necessary to demonstrate compliance with its obligations and allow for audits. The Customer may carry out audits once a year, at its own expense to verify the Company's compliance with the obligations set forth in this article. The Customer will inform the Company of the audit at least two (2) weeks before. The Company may refuse the identity of the auditor if it belongs to a competing company. The audit shall be conducted during work hours and with the least possible disturbance for the Company's activity. The audit shall not threaten (i) technical and organizational security measures implemented by the Company, (ii) security and confidentiality of data of the Company's other customers, (iii) the proper functioning and organization of the Company. When possible, Parties will agree beforehand on the scope of the audit. The audit report will be sent to the Company so as to submit comments, which will be attached to the final version of the audit report. Each audit report will be considered as a confidential information.</p>

            <p className="font-medium text-black/80 mt-3">Customer's obligations with respect to the Company:</p>
            <p>The Customer undertakes to:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>provide the Company with the personal data mentioned in Appendix 1, except any improper, disproportionate or unnecessary personal data, and except any "particular" personal data within the meaning of the Applicable Regulation, except if the processing activities justify it. In this case, the Customer will have to document these justifications and to take all measures, notably of prior information, to collect appropriate consent and appropriate security measures, appropriate for such particular data;</li>
              <li>collect under its liability, lawfully, fairly and in a transparent manner the personal data provided to the Company, for the performance of its services, and in particular, to ensure the lawfulness of processing and the information due to data subjects;</li>
              <li>maintain a record of processing activities carried out and more generally, comply with the principles of the Applicable Regulation;</li>
              <li>ensure, before and throughout the processing, compliance with the obligations set out in the Applicable Regulation.</li>
            </ol>
          </Subsection>
        </Section>

        {/* Section 17 - Confidentiality */}
        <Section number="17" title="Confidentiality">
          <p>Each of the Parties undertakes to keep strictly confidential all documents and information of a legal, commercial, industrial, strategic, technical or financial nature relating to the other Party or held by the latter of which it may have become aware during the conclusion and performance of the Contract and not to disclose them without the prior written consent of the other Party.</p>

          <p>This obligation does not extend to documents and information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>of which the Party receiving them was already aware.</li>
            <li>already public at the time of their communication or which would become public without breach of this Contract.</li>
            <li>which have been lawfully received from a third party.</li>
            <li>the communication of which would be required by the judicial authorities, pursuant to laws and regulations or in order to establish the rights of a Party under this contract.</li>
          </ul>

          <p className="mt-3">This obligation of confidentiality extends to all employees, collaborators, trainees, directors and agents of the Parties as well as to their affiliated advisors and co-contractors, to whom confidential documents or information may only be transmitted if they are bound by the same obligation of confidentiality as that provided for herein.</p>

          <p>This will continue to produce its effects during the 5 years following the end of relations between the Parties.</p>
        </Section>

        {/* Section 18 - Force Majeure */}
        <Section number="18" title="Force Majeure">
          <p>The Company shall not be liable for any failure or delay in the performance of its contractual obligations due to force majeure occurring during the term of its relationship with the Customer as defined in article 1218 of the French Civil Code.</p>

          <p>If the Company is prevented from fulfilling its obligations due to force majeure, it must inform the Customer by registered letter with acknowledgement of receipt. Obligations will be suspended on receipt of the letter and must be resumed within a reasonable time once the force majeure has ceased.</p>

          <p>The Company nevertheless remains bound by the performance of obligations not affected by force majeure.</p>
        </Section>

        {/* Section 19 - End of Services */}
        <Section number="19" title="End of Services">
          <p>Termination is effective immediately. The Customer no longer has access to their Account once the Services have ended.</p>

          <p>At the end of the Contract, for any reason whatsoever, the Customer must immediately cease all use of the Platform and submit to FREEDA all programs and documents relating to it.</p>

          <p>The termination of the Contract has no impact on the provisions of these Terms and Conditions intended to last beyond that, and in particular the articles "Intellectual Property", "Confidentiality", and this article.</p>

          <p>The Company may delete any Account if it has remained inactive for a continuous period of more than 24 months.</p>
        </Section>

        {/* Section 20 - Sanctions */}
        <Section number="20" title="Sanctions in the Event of Breach">
          <p>The following are material obligations to the Customer (the "Material Obligations"):</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>payment of the price,</li>
            <li>not to provide the Company with incorrect or incomplete information,</li>
            <li>not to use the Services for a third party,</li>
            <li>not to engage in any illegal or fraudulent activities or activities that infringe on the rights or safety of third parties, undermine public order or violate applicable laws and regulations.</li>
          </ul>

          <p className="mt-3">In the event of a breach of any of these Material Obligations, the Company may:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>suspend or terminate the Customer's access to the Services,</li>
            <li>delete all Content related to the breach,</li>
            <li>publish on the Platform any information message the Company deems useful,</li>
            <li>notify any competent authority, cooperate with it and provide it with any information that may be useful in investigating and punishing illegal or illicit activities,</li>
            <li>take any legal action.</li>
          </ul>

          <p className="mt-3">These sanctions are without prejudice to any damages that the Company may claim from the Customer.</p>

          <p>In the event of a breach of any obligation other than a Material Obligation, the Company will request the Customer by any useful written means to remedy the breach within a maximum period of 15 calendar days. Services will be terminated at the end of this period if the breach is not remedied.</p>

          <p>Termination of Services entails deletion of the Customer's Account.</p>
        </Section>

        {/* Section 21 - Modification */}
        <Section number="21" title="Modification of Terms and Conditions">
          <p>The Company may modify its Terms and Conditions at any time and will inform the Customer by any written means (and in particular by email) at least 30 calendar days before they come into force.</p>
        </Section>

        {/* Section 22 - Language */}
        <Section number="22" title="Language">
          <p>In the event of contradiction or dispute as to the meaning of any term or provision, the English language shall prevail.</p>
        </Section>

        {/* Section 23 - Applicable Law */}
        <Section number="23" title="Applicable Law and Jurisdiction">
          <p>The Terms and Conditions are governed by French law.</p>

          <p>In the event of a dispute between the Customer and the Company, and in the absence of an amicable agreement within 2 months of the first notification, the dispute shall be submitted to the exclusive jurisdiction of the courts of Paris (France), except in the event of mandatory provisions to the contrary.</p>
        </Section>

        {/* Appendix */}
        <section className="mt-16 pt-10 border-t-2 border-black/10">
          <h2 className="font-trap text-xl md:text-2xl font-semibold text-black mb-6">
            Appendix 1 – Personal Data
          </h2>

          <div className="bg-[#F8F8F8] rounded-lg p-6">
            <h3 className="font-trap text-lg font-semibold text-black mb-4">Description of the processing of personal data carried out by the Provider on behalf of the Customer</h3>

            <div className="space-y-4 font-inter text-[15px] text-black/70">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2">
                <span className="font-medium text-black">Purpose(s):</span>
                <span className="italic">To be completed</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2">
                <span className="font-medium text-black">Nature:</span>
                <span className="italic">To be completed</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2">
                <span className="font-medium text-black">Categories of data:</span>
                <span className="italic">To be completed</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2">
                <span className="font-medium text-black">Data subjects:</span>
                <span className="italic">To be completed</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2">
                <span className="font-medium text-black">Duration:</span>
                <span className="italic">To be completed</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F8F8] rounded-lg p-6 mt-6">
            <h3 className="font-trap text-lg font-semibold text-black mb-4">List of the Sub-Processor(s) authorized</h3>
            <p className="font-inter text-[15px] text-black/70 italic">To be completed</p>
          </div>
        </section>

      </article>

      {/* Footer */}
      {footerSlices && footerSlices.length > 0 && (
        <SliceZone slices={footerSlices} components={components} />
      )}
    </main>
  );
}
