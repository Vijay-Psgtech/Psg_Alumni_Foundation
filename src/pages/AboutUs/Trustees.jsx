import React from "react";
import { motion } from "framer-motion";

const TrusteesPage = () => {
  const trustees = [
    { sl: 1, name: "Mr.L.Gopalakrishnan", position: "Chairman / Ex-officio Trustee", address: "Chairman, PSG Institutions, Peelamedu, Coimbatore – 641 004" },
    { sl: 2, name: "Dr.K.Prakasan", position: "Ex-Officio Trustee", address: "Principal, PSG College of Technology, Coimbatore – 641 004" },
    { sl: 3, name: "Mr.V.Krishnakumar", position: "Ex-Officio Trustee / Treasurer", address: "Vice President, Marketing & Strategy, Aquasub Engineering, Thudiyalur, Coimbatore – 641 034" },
    { sl: 4, name: "Mr.V.Sriram", position: "Trustee / Secretary", address: "Managing Partner, Spearmark Engineering Pvt Ltd, 37/1, Athipalayam Road, Chinnavedampatti Post, Coimbatore – 641 006" },
    { sl: 5, name: "Mr.D.Vijay Mohan", position: "Trustee", address: "Founder - Pricol, CPM Towers, 109, Race Course Road, Coimbatore-641 018" },
    { sl: 6, name: "Dr.V.Kovaichelvan", position: "Trustee", address: "Former Director, TVS Institute for Quality and Leadership, TVS Motor Company Ltd., Bengaluru- 562107" },
    { sl: 7, name: "Mr.R.Gowthaman", position: "Trustee", address: "Kanchana Mahal A/C, BRG Madepalli, Bargur, Krishnagiri – 635 104" },
    { sl: 8, name: "Mr.D.Nandakumar", position: "Trustee", address: "Managing Director, Selvam Agencies, 40, Dr.Nanjappa Road, Coimbatore – 641 018" },
    { sl: 9, name: "Mr.N.Krishna Samraj", position: "Trustee", address: "Managing Director, Magna Electro Castings Limited, 43, Balasundaram Road, Pappanaickenpalayam, Coimbatore – 641 018" },
    { sl: 10, name: "Mr.K.Velusamy", position: "Trustee", address: "Managing Director, Marks Engineering, 491/4, Karumathampatty Annur Road, Kaduvettipalayam Post, Coimbatore – 641-659" },
    { sl: 11, name: "Mr.G.Srinivasan", position: "Trustee", address: "Managing Director, Srinivasan Associates Pvt. Ltd., Coimbatore – 641 004" },
    { sl: 12, name: "Mr.V.Sundaram", position: "Trustee", address: "Managing Director, Sundar Enterprise, E-29, SIDCO Private Industrial Estate, Kurichi, Coimbatore - 641021" },
    { sl: 13, name: "Mr.R.Saravanan", position: "Trustee", address: "Managing Director, Sandfits Foundries Pvt. Ltd., S F No.655/ 4B, Ravathur Pirivu, Irugur, Coimbatore – 641 402" },
    { sl: 14, name: "Dr.K.Sureshkumar", position: "Trustee", address: "Executive Director, PSG STEP, PSG College of Technology, Peelamedu, Coimbatore – 641 004" },
    { sl: 15, name: "Dr.P.Radhakrishnan", position: "Trustee", address: "115, GV Residency, Sowripalayam, Coimbatore – 641 028" },
    { sl: 16, name: "Mr.C.Raviselvan", position: "Trustee", address: "Director, GEM Equipments Ltd, S F No. 103, Arasur, Coimbatore 641 407" },
    { sl: 17, name: "Mr.R.Mylsamy", position: "Trustee", address: "Managing Director, M M Gears Pvt Ltd, 1/285, Mudalipalayam Road, Arasur, Coimbatore 641 407" },
    { sl: 18, name: "Mr.L.K.M.Aadhi", position: "Trustee", address: "Chairman, Elkayem Auto Ancillaries P Ltd, 159B, SIPCOT Industrial Complex, Hosur - 635 126" },
    { sl: 19, name: "Dr.A.V.Vardharajan", position: "Trustee", address: "Chairman, AV Group of Companies, SF No.200/1 A, Trichy Road, Ravathur Pirivu, Kannapalayam Post, Coimbatore - 641 402" },
    { sl: 20, name: "Mr.R.Palaniswami", position: "Trustee", address: "Chief Executive, Rangasayee Alloy Castings, Avanashi Road, Arasur, Coimbatore - 641 407" },
    { sl: 21, name: "Mr.R.S.Krishnaswamy", position: "Trustee", address: "A2/27, Sreevatsa Enclave, GN Mills Post, Coimbatore – 641 029" },
    { sl: 22, name: "Dr.R.Rudramoorthy", position: "Trustee", address: "Former Principal, PSG College of Technology, Peelamedu, Coimbatore – 641 004" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,600&family=Outfit:wght@300;400;500;600&display=swap');
        .vision-page{background:#080b18;padding:110px 24px;font-family:'Outfit',sans-serif;position:relative;overflow:hidden;min-height:auto;display:flex;align-items:center;}
        .vision-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
        .vision-container{max-width:1200px;margin:0 auto;position:relative;z-index:2;width:100%;}
        .vision-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:rgba(201,168,76,.72);margin-bottom:26px;justify-content:center;width:100%;}
        .vision-eyebrow .vline{width:28px;height:1.5px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.65));}
        .vision-card{position:relative;background:rgba(255,255,255,.028);border:1px solid rgba(201,168,76,.17);border-radius:14px;padding:56px 60px;text-align:left;overflow:hidden;margin-bottom:40px;}
        .vision-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#a86e20,#e8c255,#a86e20);}
        .vision-qmark{font-family:'Playfair Display',serif;font-size:150px;line-height:.75;color:rgba(201,168,76,.07);position:absolute;top:18px;left:32px;font-style:italic;pointer-events:none;user-select:none;}
        .vision-text{font-family:'Playfair Display',serif;font-size:clamp(20px,2.6vw,28px);font-weight:500;color:rgba(232,238,252,.82);line-height:1.62;font-style:italic;position:relative;z-index:2;}
        .vision-text strong{font-style:normal;font-weight:700;background:linear-gradient(130deg,#c9a84c,#f0d870);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .vision-divider{width:48px;height:1.5px;background:linear-gradient(90deg,#c9a84c,#f0d870);margin:28px 0 18px;}
        .vision-footer{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:rgba(200,215,240,.3);}
        
        .trustees-table-wrapper{position:relative;background:rgba(255,255,255,.028);border:1px solid rgba(201,168,76,.17);border-radius:14px;overflow:hidden;margin-bottom:40px;}
        .trustees-table-wrapper::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#a86e20,#e8c255,#a86e20);z-index:1;}
        .trustees-table{width:100%;border-collapse:collapse;z-index:2;position:relative;}
        .trustees-table thead{background:rgba(201,168,76,.08);border-bottom:1px solid rgba(201,168,76,.25);}
        .trustees-table th{padding:18px 16px;text-align:left;font-weight:600;font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:rgba(201,168,76,.9);font-family:'Outfit',sans-serif;}
        .trustees-table tbody tr{border-bottom:1px solid rgba(201,168,76,.1);transition:background .3s ease;}
        .trustees-table tbody tr:hover{background:rgba(201,168,76,.04);}
        .trustees-table td{padding:14px 16px;color:rgba(232,238,252,.75);font-size:13px;font-family:'Outfit',sans-serif;line-height:1.5;}
        .trustees-table td.sl-col{font-weight:600;color:rgba(201,168,76,.85);width:40px;text-align:center;}
        .trustees-table td.name-col{font-weight:600;color:rgba(232,238,252,.9);min-width:150px;}
        .trustees-table td.position-col{background:rgba(201,168,76,.04);font-weight:500;color:rgba(201,168,76,.8);}
        
        @media(max-width:768px){
          .vision-card{padding:36px 24px;}
          .trustees-table-wrapper{margin-bottom:20px;}
          .trustees-table th,.trustees-table td{padding:10px 8px;font-size:11px;}
          .trustees-table{font-size:12px;}
          .vision-eyebrow{flex-direction:column;gap:8px;}
          .vision-eyebrow .vline{width:20px;}
        }
        
        @media(max-width:600px){
          .vision-page{padding:80px 16px;}
          .vision-card{padding:24px 16px;}
          .trustees-table-wrapper{border-radius:10px;}
          .trustees-table th,.trustees-table td{padding:8px 6px;font-size:10px;}
          .trustees-table{font-size:11px;}
        }
      `}</style>

      <section className="vision-page">
        <div className="vision-orb" style={{width:420,height:420,top:-100,right:-100,background:"rgba(201,168,76,.055)"}}/>
        <div className="vision-orb" style={{width:320,height:320,bottom:-80,left:-80,background:"rgba(70,110,220,.045)"}}/>

        <div className="vision-container">
          <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} transition={{duration:.75}} viewport={{once:true}}>
            <div className="vision-eyebrow">
              <div className="vline"/>Board of Trustees<div className="vline" style={{background:"linear-gradient(90deg,rgba(201,168,76,.65),transparent)"}}/>
            </div>
          </motion.div>

          <motion.div className="vision-card" initial={{opacity:0,y:38}} whileInView={{opacity:1,y:0}} transition={{duration:.9,delay:.2}} viewport={{once:true}}>
            <div className="vision-qmark">"</div>
            <p className="vision-text">
              Meet the distinguished leaders guiding our <strong>alumni foundation</strong> with their expertise and commitment.
            </p>
            <div className="vision-divider"/>
          </motion.div>

          <motion.div className="trustees-table-wrapper" initial={{opacity:0,y:38}} whileInView={{opacity:1,y:0}} transition={{duration:.9,delay:.4}} viewport={{once:true}}>
            <table className="trustees-table">
              <thead>
                <tr>
                  <th style={{width:"5%"}}>Sl. No</th>
                  <th style={{width:"20%"}}>Name of Trustee</th>
                  <th style={{width:"25%"}}>Position / Role</th>
                  <th style={{width:"50%"}}>Address / Organization</th>
                </tr>
              </thead>
              <tbody>
                {trustees.map((trustee, idx) => (
                  <motion.tr key={trustee.sl} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.5,delay:.05*idx}} viewport={{once:true}}>
                    <td className="sl-col">{trustee.sl}</td>
                    <td className="name-col">{trustee.name}</td>
                    <td className="position-col">{trustee.position}</td>
                    <td>{trustee.address}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrusteesPage;