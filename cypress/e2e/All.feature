@search
Feature: Search car

  I want to Search car of required specifications

  @search-car
  Scenario: Search car
    Given I open instamotion home page
    When I see cookies dialog
    Then I Accept cookies
    When I click on "Auto finden"
    Then Url contains /autos
    Then Verify sort by option exist
    Then select brand BMW
    Then select model 2er Reihe
    Then select fuel Diesel
    Then select car type Limousine
    Then Verify filter dropdown
    Then verify result cound is 5
    Then Verify URL which contains URL param

@offers
Feature: Offers

  I want to see offers on cars

  @offers-car
  Scenario: Offers car
    Given I open instamotion home page
    When I see cookies dialog
    Then I Accept cookies
    When I click on "Angebote"
    Then Url contains /deals
    Then should contains 3 offer
    Then should have valid image URL
    Then select offer "Top Gebrauchte"
    Then Verify offers with cars

@howitworks
Feature: How it works?

  I want to see how it works flow

  @howitworks-flow
  Scenario: How it works?
    Given I open instamotion home page
    When I see cookies dialog
    Then I Accept cookies
    When I click on "So funktioniert's"
    Then Url contains /so-funktionierts
    Then Verify all content on page

@home
Feature: Home Page

  I want to validate home page

  @home-page
  Scenario: Home Page
    Given I open instamotion home page
    When I see cookies dialog
    Then I Accept cookies
    Then Url contains home url
    Then should have "Auto finden"
    Then should have "Angebote"
    Then should have "So funktioniert's"
    Then should have "FAQ"
    Then should have "Favoriten"
    Then should have "089 2109 4444"
    Then Should validate footer text




