Sequel.migration do
  up do
    create_table :locations do
      primary_key :id
      String :formatted_address
      Float :lat
      Float :lng
    end
  end

  down do
    drop_table :locations
  end
end
