import Arrow from "@/assets/breadcrumb-arrow.svg";
import {
  StyledBreadcrumbContainer,
  StyledBreadcrumbs,
} from "@/components/Breadcrumbs/Breadcrumbs.styled";
import { BreadcrumbsItem } from "@/components/Breadcrumbs/components/BredcrumbsItem";
import { breadcrumbItems } from "@/components/Breadcrumbs/constants";
import { useOrderPage } from "@/hooks/useOrderPage";

export function Breadcrumbs() {
  const { isOrderPage, orderId } = useOrderPage();

  return (
    <StyledBreadcrumbs>
      <ul>
        {isOrderPage ? (
          <StyledBreadcrumbContainer>
            <BreadcrumbsItem name={`Заказ номер ${orderId}`} href="" index={1} />
          </StyledBreadcrumbContainer>
        ) : (
          <>
            {breadcrumbItems.map(({ id, name, href }, index) => (
              <StyledBreadcrumbContainer key={id}>
                <BreadcrumbsItem name={name} href={href} index={index} />
                <Arrow style={{ width: "6px", height: "8px" }} />
              </StyledBreadcrumbContainer>
            ))}
          </>
        )}
      </ul>
    </StyledBreadcrumbs>
  );
}
