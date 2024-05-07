import Arrow from "@/assets/breadcrumb-arrow.svg";
import {
  StyledBreadcrumbContainer,
  StyledBreadcrumbs,
} from "@/components/Breadcrumbs/Breadcrumbs.styled";
import { BreadcrumbsItem } from "@/components/Breadcrumbs/components/BredcrumbsItem";
import { breadcrumbItems } from "@/components/Breadcrumbs/constants";

export function Breadcrumbs() {
  return (
    <StyledBreadcrumbs>
      <ul>
        {breadcrumbItems.map(({ id, name, href }, index) => (
          <StyledBreadcrumbContainer key={id}>
            <BreadcrumbsItem key={id} name={name} href={href} index={index} />
            <Arrow style={{ width: "6px", height: "8px" }} />
          </StyledBreadcrumbContainer>
        ))}
      </ul>
    </StyledBreadcrumbs>
  );
}
