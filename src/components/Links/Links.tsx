import React, { Component } from "react";
import { LinkSC, LinksContainerSC } from "./style";
import { ILink } from "./types";

class Links extends Component<any, any> {
  state = {
    activeLink: "",
  };

  setActive = (link: string) => {
    this.setState({ activeLink: link });
  };

  render() {
    const links: ILink[] = [
      {
        name: "Shop",
        link: "/",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "Our Story",
        link: "/about",
      },
    ];

    return (
      <LinksContainerSC>
        {links.map(({ name, link }: ILink) => (
          <LinkSC
            key={name}
            to={link}
            onClick={() => this.setActive(link)}
            isActive={this.state.activeLink === link}
          >
            {name}
          </LinkSC>
        ))}
      </LinksContainerSC>
    );
  }
}

export default Links;
