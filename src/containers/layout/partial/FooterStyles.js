import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 30px 0 0px 0;
  margin-top: 70px;
  background: #eaf1ff;
  position: relative;
  font-size: $font-size-14;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: -35px;
    width: 100%;
    height: 60px;
    background: #e9f1ff;
    border-radius: 360% 360% 0% 0%;
  }
`;

export const Container = styled.div`
  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 90%;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 320px) and (max-width: 567px) {
    .container {
      padding-right: 8px;
      padding-left: 8px;
    }
  }
`;

export const FooterLink = styled.a`
  line-height: 30px;
  &:hover {
    text-decoration: underline;
  }
`;

export const CopyRight = styled.div`
  background: #dbe7ff;
  font-size: $FontSize12;

  a {
    margin: 0 10px;
  }

  .copy-info {
    @extend .w-50;
    @include d-flex {
      justify-content: getJustify(fs);
      align-items: checkAlign(c);
    }

    @include break-point(mobile) {
      justify-content: getJustify(c);
    }
  }
  .tnc-info {
    @extend .w-50;
    @include d-flex {
      justify-content: getJustify(fe);
      align-items: checkAlign(c);
    }
    @include break-point(mobile) {
      justify-content: getJustify(c);
    }
    @include break-point(mobile-medium) {
    }
  }
`;

//
export const TNCInfo = styled.div`
  //
`;
