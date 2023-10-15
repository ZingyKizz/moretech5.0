branch_info_query = """
    select
        *
    from
        branches
    where
        id = {id};
"""

branch_services_query = """
    select
        branch_id,
        json_agg(json_build_object('is_legal_entity', is_legal_entity, 'titles', services)) as services
    from
        services
    where
        branch_id = {id}
    group by
        branch_id;
"""

branches_query = """
    select
        *,
        case 
            when oh.branch_id is not null then 1
            else 0
        end as "isOpen",
        services
    from
        branches as b
        inner join services_flattened as sf on
            b.id = sf.branch_id
        left join open_hours as oh on 
            b.id = oh.branch_id
            and dayofweek = {dayofweek}
            and {current_hour} between start_hour and end_hour
    where 1 = 1

"""

branch_workload_query = """
    select
        branch_id,
        dayofweek,
        is_legal_entity,
        service_title,
        start_time_of_wait_hour,
        waiting_time_prediction,
        service_time_prediction
    from
        workload_prediction
    where 
        1 = 1 
"""
