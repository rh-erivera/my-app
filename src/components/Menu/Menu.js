import React, { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import MenuItem from './MenuItem';

const Menu = ({ open, setOpen }) => {
    const [catalogData, setCatalogData] = useState();
    // const [siteData, setSiteData] = useState()
    const getData = async () => {
        const requestCatalog = await fetch("https://development.internal.rhapsodynonprod.com/rh-experience-layer-v1-external/graphql", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-US,en;q=0.9",
              "authorization": "",
              "cache-control": "no-cache",
              "content-type": "application/json",
              "pragma": "no-cache",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"operationName\":\"CatalogNavigation\",\"variables\":{\"siteId\":\"RH\",\"mobile\":true},\"query\":\"query CatalogNavigation($filter: String, $siteId: String! = \\\"RH\\\", $mobile: Boolean = true) {\\n  catalogNavigation(filter: $filter, siteId: $siteId, mobile: $mobile) {\\n    id\\n    targetUrl\\n    displayName\\n    uxAttributes {\\n      selectorId\\n    }\\n    childCategories {\\n      id\\n      targetUrl\\n      displayName\\n      uxAttributes {\\n        selectorId\\n      }\\n      childCategories {\\n        id\\n        targetUrl\\n        displayName\\n        uxAttributes {\\n          selectorId\\n        }\\n        childCategories {\\n          id\\n          targetUrl\\n          displayName\\n          uxAttributes {\\n            selectorId\\n          }\\n          childCategories {\\n            id\\n            targetUrl\\n            displayName\\n            uxAttributes {\\n              selectorId\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        // const requestSite = await fetch("https://development.internal.rhapsodynonprod.com/rh-experience-layer-v1-external/graphql", {
        //     "headers": {
        //         "accept": "*/*",
        //         "accept-language": "en-US,en;q=0.9",
        //         "authorization": "",
        //         "cache-control": "no-cache",
        //         "content-type": "application/json",
        //         "pragma": "no-cache",
        //         "sec-fetch-dest": "empty",
        //         "sec-fetch-mode": "cors",
        //         "sec-fetch-site": "same-origin"
        //     },
        //     "referrerPolicy": "strict-origin-when-cross-origin",
        //     "body": "{\"operationName\":\"SiteNavigation\",\"variables\":{\"siteId\":\"RH\"},\"query\":\"query SiteNavigation($siteId: String! = \\\"RH\\\") {\\n  siteNavigation(siteId: $siteId) {\\n    id\\n    targetUrl\\n    displayName\\n    uxAttributes {\\n      selectorId\\n    }\\n    childCategories {\\n      id\\n      targetUrl\\n      displayName\\n      uxAttributes {\\n        selectorId\\n      }\\n    }\\n  }\\n}\\n\"}",
        //     "method": "POST",
        //     "mode": "cors",
        //     "credentials": "include"
        // });
        const catalogData = await (await requestCatalog).json()
        // const siteData = await (await requestSite).json()
        setCatalogData(catalogData.data)
        // setSiteData(siteData.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <StyledMenu open={open} setOpen={setOpen}>
            <section>
                {catalogData
                ? catalogData.catalogNavigation.childCategories.map(list => (
                    <MenuItem
                    key={list.id}
                    name={list.displayName} 
                    childCategories={list.childCategories} 
                    uppercase={"uppercase"} />
                ))
                : <h1>loading catalog data</h1>
                }
            </section>
            {/* <section className="my-account">
                <p>MY ACCOUNT<br /><span style={{letterSpacing: '.2px'}}>Hi, Eri</span></p>
            </section>
            <section>
                {siteData
                ? siteData.siteNavigation.childCategories.map(list => (
                    <MenuItem
                    key={list.id}
                    name={list.displayName} 
                    link={list.targetUrl} 
                    uppercase={"uppercase"} />
                ))
                : <h1>loading site data</h1>
                }
            </section>
            <div className="footer-links">
                <section>
                    <a href="https://rh.com/customer-service/email-signup.jsp"><li><span>SIGN UP FOR EMAILS</span></li></a>
                    <a href="https://rh.com/store-locations/index.jsp"><li><span>FIND A GALLERY</span></li></a>
                    <a href="https://rh.com/customer-service/catalog-request.jsp"><li><span>REQUEST A SOURCE BOOK</span></li></a>
                    <a href="https://rh.com/membership.jsp?sale=false"><li><span>RH MEMBERS PROGRAM</span></li></a>
                    <a href="https://rh.com/customer-service/index.jsp"><li><span>CUSTOMER SERVICE</span></li></a>
                    <a href="https://rh.com/content/category.jsp?context=GiftRegistry"><li><span>GIFT CARDS & REGISTRY</span></li></a>
                    <a href="https://rh.com/content/category.jsp?context=Contract"><li><span>CONTRACT SALES</span></li></a>
                    <a href="https://rh.com/content/category.jsp?context=Trade"><li><span>TO THE TRADE</span></li></a>
                </section>
            </div> */}
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
}

export default Menu;
