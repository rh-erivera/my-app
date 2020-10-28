import React, { useState, useEffect } from 'react';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import MenuItem from './MenuItem';

const Menu = ({ open, setOpen }) => {
    const [data, setData] = useState();
    const getData = async () => {
        const request = await fetch("https://stg4.rhnonprod.com/rh-experience-layer-v1/graphql", {
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
            "referrer": "https://stg4.rhnonprod.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"operationName\":\"CatalogNavigation\",\"variables\":{\"siteId\":\"RH\",\"mobile\":true},\"query\":\"query CatalogNavigation($filter: String, $siteId: String! = \\\"RH\\\", $mobile: Boolean = true) {\\n  catalogNavigation(filter: $filter, siteId: $siteId, mobile: $mobile) {\\n    id\\n    targetUrl\\n    displayName\\n    uxAttributes {\\n      selectorId\\n    }\\n    childCategories {\\n      id\\n      targetUrl\\n      displayName\\n      uxAttributes {\\n        selectorId\\n      }\\n      childCategories {\\n        id\\n        targetUrl\\n        displayName\\n        uxAttributes {\\n          selectorId\\n        }\\n        childCategories {\\n          id\\n          targetUrl\\n          displayName\\n          uxAttributes {\\n            selectorId\\n          }\\n          childCategories {\\n            id\\n            targetUrl\\n            displayName\\n            uxAttributes {\\n              selectorId\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          });
        const data = await (await request).json()
        return setData(data.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <StyledMenu open={open} setOpen={setOpen}>
            {data
            ? data.catalogNavigation.childCategories.map(list => (
                <MenuItem
                key={list.id}
                name={list.displayName} 
                childCategories={list.childCategories} 
                uppercase={"uppercase"} />
            ))
            : <h1>loading</h1>
            }
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
}

export default Menu;
